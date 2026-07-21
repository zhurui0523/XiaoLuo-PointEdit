import React, { useState, useRef } from 'react';
import { Canvas } from './Canvas';
import { Annotation, ToolType } from '../../types/annotation';
import {
  createInitialHistory,
  pushHistoryState,
  undoHistory,
  redoHistory,
  HistoryState,
} from '../../utils/history';
import {
  exportAnnotatedImage,
  downloadDataUrl,
  downloadJson,
} from '../../utils/export';
import {
  Undo,
  Redo,
  Download,
  FileJson,
  ZoomIn,
  ZoomOut,
  Sparkles,
  HelpCircle,
  X,
  MousePointer,
  Square,
  Brush,
  ArrowUpRight,
  Hash,
  Type,
  Trash2,
  Eraser,
  Upload,
  Check,
} from 'lucide-react';

const PRESET_COLORS = [
  { name: '红色', value: '#EF4444' },     // Red 500
  { name: '蓝色', value: '#3B82F6' },    // Blue 500
  { name: '黄色', value: '#F59E0B' },  // Amber 500
  { name: '绿色', value: '#10B981' },   // Emerald 500
  { name: '紫色', value: '#8B5CF6' },  // Purple 500
  { name: '黑色', value: '#1F2937' },   // Gray 800
  { name: '白色', value: '#FFFFFF' },   // White
];

const STROKE_WIDTHS = [
  { label: '细', value: 2 },
  { label: '中', value: 4 },
  { label: '粗', value: 8 },
  { label: '极粗', value: 12 },
];

export const ImageEditor: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  // Editor configuration state
  const [activeTool, setActiveTool] = useState<ToolType>('select');
  const [selectedColor, setSelectedColor] = useState<string>('#EF4444'); // Red 500
  const [selectedStrokeWidth, setSelectedStrokeWidth] = useState<number>(4);
  const [zoom, setZoom] = useState<number>(100); // 100%
  const [showStyleMenu, setShowStyleMenu] = useState<boolean>(false);

  // Selected annotation ID
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Undo/Redo Annotation list history
  const [history, setHistory] = useState<HistoryState<Annotation[]>>(() =>
    createInitialHistory([])
  );

  // Dropdown menu for export options
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- ACTIONS ---

  const handleUploadImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImageSrc(e.target.result as string);
        setFileName(file.name);
        setHistory(createInitialHistory([]));
        setSelectedId(null);
        setActiveTool('rectangle'); // automatically activate rectangle tool on new load
      }
    };
    reader.readAsDataURL(file);
  };

  const handleLoadSample = (url: string, name: string) => {
    setImageSrc(url);
    setFileName(name);
    setHistory(createInitialHistory([]));
    setSelectedId(null);
    setActiveTool('rectangle'); // automatically activate rectangle tool on new load
  };

  const handleAddAnnotation = (newAnn: Annotation) => {
    const updated = [...history.present, newAnn];
    setHistory(pushHistoryState(history, updated));
  };

  const handleUpdateAnnotation = (updatedAnn: Annotation) => {
    const updated = history.present.map((ann) =>
      ann.id === updatedAnn.id ? updatedAnn : ann
    );
    setHistory(pushHistoryState(history, updated));
  };

  const handleDeleteAnnotation = (id: string) => {
    const updated = history.present.filter((ann) => ann.id !== id);
    setHistory(pushHistoryState(history, updated));
    if (selectedId === id) {
      setSelectedId(null);
    }
  };

  const handleDeleteSelected = () => {
    if (!selectedId) return;
    const updated = history.present.filter((ann) => ann.id !== selectedId);
    setHistory(pushHistoryState(history, updated));
    setSelectedId(null);
  };

  const handleUndo = () => {
    const nextHistory = undoHistory(history);
    setHistory(nextHistory);
    setSelectedId(null);
  };

  const handleRedo = () => {
    const nextHistory = redoHistory(history);
    setHistory(nextHistory);
    setSelectedId(null);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(250, prev + 25));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(50, prev - 25));
  };

  const handleExportImage = async () => {
    if (!imageSrc) return;
    try {
      const dataUrl = await exportAnnotatedImage(imageSrc, history.present);
      const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;
      downloadDataUrl(dataUrl, `annotated_${nameWithoutExt}.png`);
      setShowExportMenu(false);
    } catch (err) {
      console.error(err);
      alert('无法渲染并保存带标注的图片。');
    }
  };

  const handleExportJson = () => {
    if (!imageSrc) return;
    const exportData = {
      sourceFile: fileName,
      exportedAt: new Date().toISOString(),
      annotations: history.present,
    };
    const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;
    downloadJson(exportData, `annotations_${nameWithoutExt}.json`);
    setShowExportMenu(false);
  };

  const handleResetEditor = () => {
    setImageSrc(null);
    setFileName('');
    setHistory(createInitialHistory([]));
    setSelectedId(null);
    setZoom(100);
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleUploadImage(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-800 font-sans select-none overflow-hidden">
      {/* File Input kept hidden */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/webp"
        className="hidden"
      />

      {/* Main Workspace Frame */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Help Overlay Panel */}
        {showHelp && (
          <div className="absolute top-3 right-3 w-80 bg-white/95 border border-gray-200 rounded-xl shadow-xl p-4.5 z-40 text-slate-600 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex items-center justify-between mb-2.5 border-b border-gray-100 pb-1.5">
              <span className="font-bold text-slate-800 flex items-center gap-1.5 text-sm">
                <Sparkles size={14} className="text-indigo-500" />
                使用帮助 / 快捷指南
              </span>
              <button
                type="button"
                onClick={() => setShowHelp(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X size={15} />
              </button>
            </div>
            <ul className="space-y-2 text-[11px] leading-relaxed">
              <li>
                <strong className="text-slate-800 font-semibold">选择模式：</strong>拖动标注以移动位置，拖动右下角控制点可缩放矩形框大小，亦可调整箭头起止点。
              </li>
              <li>
                <strong className="text-slate-800 font-semibold">矩形标记：</strong>在图像上点击并拖拽，可以画出矩形高亮区域（标红）。
              </li>
              <li>
                <strong className="text-slate-800 font-semibold">自由画笔：</strong>直接在图片上涂鸦，绘制任意曲线手写标注。
              </li>
              <li>
                <strong className="text-slate-800 font-semibold">数字序号标牌：</strong>每次点击都会生成一个自动递增的圆形序号标签（①, ②, ③），方便按步骤索引。
              </li>
              <li>
                <strong className="text-slate-800 font-semibold">文字备注：</strong>点击任意位置，在输入框中打字创建文字卡片，选择模式下双击可以重新编辑。
              </li>
              <li>
                <strong className="text-slate-800 font-semibold">橡皮擦：</strong>选中橡皮擦，点击或在标注上拖动可以直接擦除已有标注。
              </li>
            </ul>
          </div>
        )}

        {/* Center Canvas Workspace and controls */}
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">


          {/* MAIN INTERACTIVE SVG CANVAS VIEW */}
          <Canvas
            imageSrc={imageSrc}
            annotations={history.present}
            onAddAnnotation={handleAddAnnotation}
            onUpdateAnnotation={handleUpdateAnnotation}
            onDeleteAnnotation={handleDeleteAnnotation}
            selectedId={selectedId}
            onSelectId={setSelectedId}
            activeTool={activeTool}
            selectedColor={selectedColor}
            selectedStrokeWidth={selectedStrokeWidth}
            zoom={zoom}
            onUploadImage={handleUploadImage}
            onLoadSample={handleLoadSample}
          />

          {/* FLOATING ACTION TOOLBARS PILLS (Figma style) */}
          {imageSrc && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 pointer-events-none">
              {/* Left Pill: Custom tool presets */}
              <div className="bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200/80 rounded-2xl p-1.5 flex items-center gap-1 pointer-events-auto">
                {/* Upload Image */}
                <button
                  id="btn-upload-toolbar"
                  type="button"
                  onClick={triggerFileUpload}
                  className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all cursor-pointer flex items-center justify-center"
                  title="上传图片"
                >
                  <Upload size={16} />
                </button>

                {/* Small Divider */}
                <div className="w-px h-5 bg-gray-200 mx-1" />

                {/* Select / Hand */}
                <button
                  id="btn-tool-select"
                  type="button"
                  onClick={() => setActiveTool('select')}
                  className={`p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                    activeTool === 'select'
                      ? 'bg-slate-100 text-indigo-600 font-medium'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                  title="选择与拖动 (V)"
                >
                  <MousePointer size={16} />
                </button>

                {/* Rectangle: clean icon representation */}
                <button
                  id="btn-tool-rectangle"
                  type="button"
                  onClick={() => setActiveTool('rectangle')}
                  className={`p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                    activeTool === 'rectangle'
                      ? 'bg-slate-100 text-indigo-600 font-medium'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                  title="矩形框标记 (R)"
                >
                  <Square size={16} />
                </button>

                {/* Brush */}
                <button
                  id="btn-tool-brush"
                  type="button"
                  onClick={() => setActiveTool('brush')}
                  className={`p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                    activeTool === 'brush'
                      ? 'bg-slate-100 text-indigo-600 font-medium'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                  title="自由画笔 (B)"
                >
                  <Brush size={16} />
                </button>

                {/* Arrow */}
                <button
                  id="btn-tool-arrow"
                  type="button"
                  onClick={() => setActiveTool('arrow')}
                  className={`p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                    activeTool === 'arrow'
                      ? 'bg-slate-100 text-indigo-600 font-medium'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                  title="指示箭头 (A)"
                >
                  <ArrowUpRight size={16} />
                </button>

                {/* Stamp Markers (Numbered Badge) */}
                <button
                  id="btn-tool-marker"
                  type="button"
                  onClick={() => setActiveTool('marker')}
                  className={`p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                    activeTool === 'marker'
                      ? 'bg-slate-100 text-indigo-600 font-medium'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                  title="数字序号标牌 (N)"
                >
                  <Hash size={16} />
                </button>

                {/* Text comment */}
                <button
                  id="btn-tool-text"
                  type="button"
                  onClick={() => setActiveTool('text')}
                  className={`p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                    activeTool === 'text'
                      ? 'bg-slate-100 text-indigo-600 font-medium'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                  title="文字备注 (T)"
                >
                  <Type size={16} />
                </button>

                {/* Eraser Tool */}
                <button
                  id="btn-tool-eraser"
                  type="button"
                  onClick={() => setActiveTool('eraser')}
                  className={`p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                    activeTool === 'eraser'
                      ? 'bg-slate-100 text-indigo-600 font-medium'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                  title="橡皮擦 (E) - 点击或拖动擦除标注"
                >
                  <Eraser size={16} />
                </button>

                {/* Style / Color Popover Button */}
                <div className="relative">
                  <button
                    id="btn-style-popover"
                    type="button"
                    onClick={() => setShowStyleMenu(!showStyleMenu)}
                    className={`p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                      showStyleMenu
                        ? 'bg-slate-100 text-indigo-600'
                        : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                    }`}
                    title="画笔颜色与粗细"
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Outer circle with current color */}
                      <div
                        className="w-4 h-4 rounded-full border border-slate-300 shadow-inner flex items-center justify-center"
                        style={{ backgroundColor: selectedColor }}
                      >
                        {/* Inner stroke-width representation */}
                        <div
                          className="rounded-full bg-white"
                          style={{
                            width: `${Math.max(2, Math.min(8, selectedStrokeWidth * 0.7))}px`,
                            height: `${Math.max(2, Math.min(8, selectedStrokeWidth * 0.7))}px`,
                          }}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Popover Style Menu */}
                  {showStyleMenu && (
                    <>
                      {/* Click outside to close */}
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowStyleMenu(false)}
                      />
                      <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-3.5 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 z-50 flex flex-col gap-3.5 min-w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-100">
                        {/* Color Picker Section */}
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                              画笔颜色
                            </span>
                            <span className="text-[10px] font-medium text-slate-500">
                              {PRESET_COLORS.find(c => c.value === selectedColor)?.name || selectedColor}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            {PRESET_COLORS.map((color) => {
                              const isSelected = selectedColor.toLowerCase() === color.value.toLowerCase();
                              return (
                                <button
                                  key={color.value}
                                  id={`btn-popover-color-${color.name.toLowerCase()}`}
                                  type="button"
                                  onClick={() => setSelectedColor(color.value)}
                                  className={`w-6 h-6 rounded-full border transition-all duration-150 relative flex items-center justify-center cursor-pointer ${
                                    isSelected
                                      ? 'border-slate-800 scale-110 ring-2 ring-indigo-500/20'
                                      : 'border-slate-200 hover:border-slate-400 hover:scale-105'
                                  }`}
                                  style={{ backgroundColor: color.value }}
                                  title={color.name}
                                >
                                  {isSelected && (
                                    <Check
                                      size={12}
                                      className={color.value === '#FFFFFF' ? 'text-slate-800' : 'text-white'}
                                    />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Divider inside popover */}
                        <div className="h-px bg-gray-100" />

                        {/* Stroke Picker Section */}
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                              画笔粗细
                            </span>
                            <span className="text-[10px] font-medium text-slate-500">
                              {STROKE_WIDTHS.find(w => w.value === selectedStrokeWidth)?.label || `${selectedStrokeWidth}px`}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 bg-slate-50 p-0.5 rounded-lg border border-slate-100">
                            {STROKE_WIDTHS.map((width) => {
                              const isSelected = selectedStrokeWidth === width.value;
                              return (
                                <button
                                  key={width.value}
                                  id={`btn-popover-stroke-${width.value}`}
                                  type="button"
                                  onClick={() => setSelectedStrokeWidth(width.value)}
                                  className={`py-1 rounded-md text-[11px] font-semibold transition-all duration-150 cursor-pointer flex-1 text-center ${
                                    isSelected
                                      ? 'bg-white text-slate-800 shadow-xs border border-slate-200/60'
                                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
                                  }`}
                                >
                                  <div className="flex flex-col items-center justify-center gap-1">
                                    <div
                                      className="rounded-full"
                                      style={{
                                        width: `${Math.max(2, width.value * 0.7)}px`,
                                        height: `${Math.max(2, width.value * 0.7)}px`,
                                        backgroundColor: isSelected ? selectedColor : '#94A3B8',
                                      }}
                                    />
                                    <span className="text-[9px]">{width.label}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Small Divider */}
                <div className="w-px h-5 bg-gray-200 mx-1" />

                {/* History controls */}
                <button
                  id="btn-undo"
                  type="button"
                  disabled={history.past.length === 0}
                  onClick={handleUndo}
                  className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  title="撤销 (Ctrl+Z)"
                >
                  <Undo size={15} />
                </button>
                <button
                  id="btn-redo"
                  type="button"
                  disabled={history.future.length === 0}
                  onClick={handleRedo}
                  className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  title="重做 (Ctrl+Y)"
                >
                  <Redo size={15} />
                </button>

                {/* Small Divider */}
                <div className="w-px h-5 bg-gray-200 mx-1" />

                {/* Direct Save Image Button */}
                <button
                  id="btn-download-png-direct"
                  type="button"
                  onClick={handleExportImage}
                  className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer flex items-center justify-center"
                  title="保存标注后的图片"
                >
                  <Download size={15} />
                </button>

                {/* Small Divider */}
                <div className="w-px h-5 bg-gray-200 mx-1" />

                {/* Close/Reset Image */}
                <button
                  id="btn-reset-editor"
                  type="button"
                  onClick={handleResetEditor}
                  className="p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer flex items-center justify-center"
                  title="关闭图片"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Right Pill: Zoom parameters */}
              <div className="bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200/80 rounded-2xl px-3.5 py-1.5 flex items-center gap-2.5 pointer-events-auto">
                <button
                  id="btn-zoom-out"
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoom <= 50}
                  className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                  title="缩小"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="text-[11px] font-bold text-slate-700 min-w-[34px] text-center font-mono">
                  {zoom}%
                </span>
                <button
                  id="btn-zoom-in"
                  type="button"
                  onClick={handleZoomIn}
                  disabled={zoom >= 250}
                  className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                  title="放大"
                >
                  <ZoomIn size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

