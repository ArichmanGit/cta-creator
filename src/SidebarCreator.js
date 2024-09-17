import React, { useState, useEffect } from 'react';

const SidebarCreator = () => {
  const [background, setBackground] = useState('#f0f0f0');
  const [buttonColor, setButtonColor] = useState('#007bff');
  const [pictureOffset, setPictureOffset] = useState(0);
  const [buttonOffset, setButtonOffset] = useState(0);
  const [pictureSize, setPictureSize] = useState(100);
  const [buttonSize, setButtonSize] = useState(100);
  const [showDescription, setShowDescription] = useState(true);
  const [description, setDescription] = useState('Description text here');
  const [buttonText, setButtonText] = useState('Click me');
  const [buttonLink, setButtonLink] = useState('https://example.com');
  const [cropShape, setCropShape] = useState('square');
  const [pictureUrl, setPictureUrl] = useState('');
  const [backgroundWidth, setBackgroundWidth] = useState(300);
  const [descriptionSize, setDescriptionSize] = useState(16);
  const [descriptionOffset, setDescriptionOffset] = useState(0);
  const [roundedCorners, setRoundedCorners] = useState(false);
  const [cornerRadius, setCornerRadius] = useState(10);
  const [buttonRoundedCorners, setButtonRoundedCorners] = useState(false);
  const [buttonCornerRadius, setButtonCornerRadius] = useState(5);
  const [previewCode, setPreviewCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  
  // New state variables
  const [backgroundHeight, setBackgroundHeight] = useState(300);
  const [buttonTextColor, setButtonTextColor] = useState('#ffffff');
  const [descriptionTextColor, setDescriptionTextColor] = useState('#000000');

  const generateStyles = () => `
    .sidebar-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 20px;
    }
    .sidebar {
      background-color: ${background};
      padding: 20px;
      width: ${backgroundWidth}px;
      height: ${backgroundHeight}px;
      position: relative;
      text-align: center;
      ${roundedCorners ? `border-radius: ${cornerRadius}px;` : ''}
    }
    .picture {
      width: ${pictureSize}px;
      height: ${pictureSize}px;
      background-color: #ccc;
      background-image: url('${pictureUrl}');
      background-size: cover;
      background-position: center;
      margin: 0 auto 10px;
      transform: translateY(${pictureOffset}px);
      ${cropShape === 'circle' ? 'border-radius: 50%;' : ''}
    }
    .description {
      margin-bottom: 10px;
      font-size: ${descriptionSize}px;
      transform: translateY(${descriptionOffset}px);
      color: ${descriptionTextColor};
    }
    .cta-button {
      background-color: ${buttonColor};
      border: none;
      color: ${buttonTextColor};
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px auto;
      cursor: pointer;
      transform: translateY(${buttonOffset}px);
      width: ${buttonSize}%;
      ${buttonRoundedCorners ? `border-radius: ${buttonCornerRadius}px;` : ''}
    }
  `;

  const generateHTML = () => `
    <div class="sidebar-container">
      <div class="sidebar">
        <div class="picture"></div>
        ${showDescription ? `<div class="description">${description}</div>` : ''}
        <a href="${buttonLink}" class="cta-button">${buttonText}</a>
      </div>
    </div>
  `;

  useEffect(() => {
    const styles = generateStyles();
    const html = generateHTML();
    setPreviewCode(`<style>${styles}</style>${html}`);
  }, [
    background, buttonColor, pictureOffset, buttonOffset, pictureSize, buttonSize,
    showDescription, description, buttonText, buttonLink, cropShape, pictureUrl,
    backgroundWidth, descriptionSize, descriptionOffset,
    roundedCorners, cornerRadius, buttonRoundedCorners, buttonCornerRadius,
    backgroundHeight, buttonTextColor, descriptionTextColor // New dependencies
  ]);

  const handleGenerateEmbedCode = () => {
    const styles = generateStyles();
    const html = generateHTML();
    const code = `<!-- Paste this section of the code in the Site Layout Settings under Tracking Links / Conversion Codes in the <head> section -->
<style>${styles}</style>

<!-- Paste this section of the code in the Content > Sidebars and then in the source window of a new sidebar -->
${html}`;
    setGeneratedCode(code);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex h-screen">
        <div className="w-1/2 p-4 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4 text-center">CTA Sidebar Creator</h1>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-center">Background Color</label>
              <div className="flex justify-center">
                <input type="color" value={background} onChange={(e) => setBackground(e.target.value)} className="w-full max-w-xs" />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-center">Button Color</label>
              <div className="flex justify-center">
                <input type="color" value={buttonColor} onChange={(e) => setButtonColor(e.target.value)} className="w-full max-w-xs" />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-center">Picture URL</label>
              <input 
                type="text" 
                value={pictureUrl} 
                onChange={(e) => setPictureUrl(e.target.value)} 
                placeholder="Enter picture URL"
                className="w-full p-2 border rounded text-center" 
              />
            </div>

            <div>
              <label className="block mb-2 text-center">Background Width: {backgroundWidth}px</label>
              <input 
                type="range" 
                min="200" 
                max="500" 
                value={backgroundWidth} 
                onChange={(e) => setBackgroundWidth(Number(e.target.value))} 
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-2 text-center">Background Height: {backgroundHeight}px</label>
              <input 
                type="range" 
                min="200" 
                max="800" 
                value={backgroundHeight} 
                onChange={(e) => setBackgroundHeight(Number(e.target.value))} 
                className="w-full"
              />
            </div>

            <div className="flex justify-center">
              <label className="flex items-center">
                <input type="checkbox" checked={roundedCorners} onChange={(e) => setRoundedCorners(e.target.checked)} className="mr-2" />
                Rounded Corners (Background)
              </label>
            </div>

            {roundedCorners && (
              <div>
                <label className="block mb-2 text-center">Corner Radius (Background): {cornerRadius}px</label>
                <input 
                  type="range" 
                  min="0" 
                  max="50" 
                  value={cornerRadius} 
                  onChange={(e) => setCornerRadius(Number(e.target.value))} 
                  className="w-full"
                />
              </div>
            )}

            <div className="flex justify-center">
              <label className="flex items-center">
                <input type="checkbox" checked={buttonRoundedCorners} onChange={(e) => setButtonRoundedCorners(e.target.checked)} className="mr-2" />
                Rounded Corners (Button)
              </label>
            </div>

            {buttonRoundedCorners && (
              <div>
                <label className="block mb-2 text-center">Corner Radius (Button): {buttonCornerRadius}px</label>
                <input 
                  type="range" 
                  min="0" 
                  max="50" 
                  value={buttonCornerRadius} 
                  onChange={(e) => setButtonCornerRadius(Number(e.target.value))} 
                  className="w-full"
                />
              </div>
            )}

            <div>
              <label className="block mb-2 text-center">Description Size: {descriptionSize}px</label>
              <input 
                type="range" 
                min="12" 
                max="24" 
                value={descriptionSize} 
                onChange={(e) => setDescriptionSize(Number(e.target.value))} 
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-2 text-center">Description Offset: {descriptionOffset}px</label>
              <input 
                type="range" 
                min="-50" 
                max="50" 
                value={descriptionOffset} 
                onChange={(e) => setDescriptionOffset(Number(e.target.value))} 
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-2 text-center">Picture Offset: {pictureOffset}px</label>
              <input 
                type="range" 
                min="-50" 
                max="50" 
                value={pictureOffset} 
                onChange={(e) => setPictureOffset(Number(e.target.value))} 
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-2 text-center">Button Offset: {buttonOffset}px</label>
              <input 
                type="range" 
                min="-50" 
                max="50" 
                value={buttonOffset} 
                onChange={(e) => setButtonOffset(Number(e.target.value))} 
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-2 text-center">Picture Size: {pictureSize}px</label>
              <input 
                type="range" 
                min="50" 
                max="200" 
                value={pictureSize} 
                onChange={(e) => setPictureSize(Number(e.target.value))} 
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-2 text-center">Button Size: {buttonSize}%</label>
              <input 
                type="range" 
                min="50" 
                max="100" 
                value={buttonSize} 
                onChange={(e) => setButtonSize(Number(e.target.value))} 
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-2 text-center">Button Text Color</label>
              <div className="flex justify-center">
                <input 
                  type="color" 
                  value={buttonTextColor} 
                  onChange={(e) => setButtonTextColor(e.target.value)} 
                  className="w-full max-w-xs" 
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-center">Description Text Color</label>
              <div className="flex justify-center">
                <input 
                  type="color" 
                  value={descriptionTextColor} 
                  onChange={(e) => setDescriptionTextColor(e.target.value)} 
                  className="w-full max-w-xs" 
                />
              </div>
            </div>

            <div className="flex justify-center">
              <label className="flex items-center">
                <input type="checkbox" checked={showDescription} onChange={(e) => setShowDescription(e.target.checked)} className="mr-2" />
                Show Description
              </label>
            </div>

            <div>
              <label className="block mb-2 text-center">Description Text</label>
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded text-center" />
            </div>

            <div>
              <label className="block mb-2 text-center">Button Text</label>
              <input type="text" value={buttonText} onChange={(e) => setButtonText(e.target.value)} className="w-full p-2 border rounded text-center" />
            </div>

            <div>
              <label className="block mb-2 text-center">Button Link</label>
              <input type="text" value={buttonLink} onChange={(e) => setButtonLink(e.target.value)} className="w-full p-2 border rounded text-center" />
            </div>

            <div>
              <label className="block mb-2 text-center">Picture Crop Shape</label>
              <select value={cropShape} onChange={(e) => setCropShape(e.target.value)} className="w-full p-2 border rounded text-center">
                <option value="square">Square</option>
                <option value="circle">Circle</option>
              </select>
            </div>

            <div className="flex justify-center mt-4">
              <button onClick={handleGenerateEmbedCode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Generate Embed Code
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-4 flex flex-col bg-gray-100 overflow-y-auto">
          <div className="border rounded p-4 bg-white mb-4">
            <h2 className="text-xl font-bold mb-2 text-center">Preview</h2>
            <div dangerouslySetInnerHTML={{ __html: previewCode }} />
          </div>

          <div className="border rounded p-4 bg-white">
            <h2 className="text-xl font-bold mb-2 text-center">Generated Embed Code</h2>
            <pre className="whitespace-pre-wrap break-words bg-gray-100 p-2 rounded">
              <code>{generatedCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCreator;