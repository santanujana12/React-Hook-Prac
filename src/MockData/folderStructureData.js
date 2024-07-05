export const folderStructureData = [
  {
    name: "Folder 1",
    isFolder: true,
    children: [
      {
        name: "Folder 1.1",
        isFolder: true,
        children: [
          {
            name: "folder 2",
            isFolder: true,
            children: [],
          },
          {
            name: "File 1",
            isFolder: false,
          },
        ],
      },
      {
        name: "app.js",
        isFolder: false,
      },
      {
        name: "package.json",
        isFolder: false,
      },
      {
        name: "package-lock.json",
        isFolder: false,
      },
    ],
  },
];
