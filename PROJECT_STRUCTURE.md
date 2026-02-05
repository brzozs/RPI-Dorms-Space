# Project Structure

```
RPI-Dorms-Space/
├── public/                      # Static files served directly
│   ├── index.html              # HTML template
│   └── models/                 # 3D model files (.glb/.gltf)
│       └── .gitkeep
│
├── src/                        # React source code
│   ├── components/             # React components
│   │   ├── DormSelector.js     # Sidebar with building list
│   │   ├── DormSelector.css    # Sidebar styles
│   │   ├── DormViewer.js       # 3D viewer container
│   │   ├── DormViewer.css      # Viewer styles
│   │   ├── DormModel.js        # 3D model renderer (placeholder)
│   │   └── DormModel.css       # Model-specific styles (if needed)
│   │
│   ├── App.js                  # Main app component
│   ├── App.css                 # Main app styles
│   ├── index.js                # React entry point
│   └── index.css               # Global styles
│
├── .gitignore                  # Git ignore rules
├── LICENSE                     # Project license
├── README.md                   # Project documentation
├── package.json                # Dependencies & scripts
└── PROJECT_STRUCTURE.md        # This file

```

## Key Files

### React Components
- **App.js** - Main application shell, manages state
- **DormSelector.js** - Left sidebar with dorm building selection
- **DormViewer.js** - Right panel with 3D canvas and controls
- **DormModel.js** - Three.js 3D scene (placeholder - replace with real models)

### Styling
- **index.css** - Global styles (dark theme, resets)
- **App.css** - Layout grid, header, footer
- **DormSelector.css** - Sidebar, building cards
- **DormViewer.css** - 3D viewer, overlays, info panels

### Configuration
- **package.json** - Dependencies (React, Three.js, React Three Fiber)
- **.gitignore** - Excludes node_modules, large CAD files, build output

## Adding New Dorm Buildings

1. Export 3D model from Siemens NX → Convert to GLB
2. Place in `public/models/{building-name}.glb`
3. Add building info to `DORMS` array in `src/components/DormSelector.js`
4. Update model loader in `src/components/DormModel.js` to load new GLB file

## Development Workflow

```bash
npm install      # Install dependencies
npm start        # Run dev server (http://localhost:3000)
npm run build    # Create production build
```
