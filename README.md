# RPI Dorms Space - 3D Dorm Viewer

A web application for RPI students to explore 3D models of their future dorm rooms.

## 🚧 ROUGH DRAFT - Work In Progress

This is a very rough initial draft. The placeholder 3D models will be replaced with actual Siemens NX exports.

## Features (Planned)

- 📐 Accurate 3D models created in Siemens NX
- 🏠 Multiple dorm buildings and room types
- 🖱️ Interactive 3D viewer (rotate, zoom, pan)
- 📏 Accurate room dimensions and furniture placement
- 📱 Responsive design for mobile and desktop

## Tech Stack

- **React** - Frontend framework
- **Three.js** - 3D rendering
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **Siemens NX** - 3D CAD modeling (models to be imported)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

## 3D Model Integration

### Exporting from Siemens NX

1. Create your dorm room model in Siemens NX
2. Export as STEP (.stp) or Parasolid (.x_t) format
3. Convert to glTF/GLB format using a converter tool:
   - Online: [https://products.aspose.app/3d/conversion](https://products.aspose.app/3d/conversion)
   - CLI: Use `obj2gltf` or similar tools
4. Place .glb files in `public/models/` directory
5. Update the model loader in `DormModel.js`

### Recommended Model Guidelines

- Keep polygon count reasonable (< 100k for web performance)
- Use compressed textures (jpg/png, max 2048x2048)
- Optimize models for web (remove internal geometry, merge meshes)
- Use glTF-Binary (.glb) format for better compression

## Project Structure

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for detailed file organization.

```
RPI-Dorms-Space/
├── public/models/          # Place .glb 3D models here
├── src/
│   ├── components/         # React components
│   │   ├── DormSelector.js # Building list sidebar
│   │   ├── DormViewer.js   # 3D canvas viewer
│   │   └── DormModel.js    # 3D scene (PLACEHOLDER)
│   ├── App.js             # Main app
│   └── index.js           # Entry point
└── package.json           # Dependencies
```

## TODO

- [ ] Export actual dorm models from Siemens NX
- [ ] Convert models to glTF/GLB format
- [ ] Integrate real models into DormModel.js
- [ ] Add more dorm buildings
- [ ] Add room measurements overlay
- [ ] Add furniture customization options
- [ ] Add mobile touch controls
- [ ] Performance optimization
- [ ] Deploy to GitHub Pages

## Contributing

This is a student project for RPI. Contributions welcome!

## License

See LICENSE file
