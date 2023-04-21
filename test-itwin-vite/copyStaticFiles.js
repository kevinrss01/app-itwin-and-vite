const fs = require("fs");
const path = require("path");

//Modules
const itwinPath = "node_modules/@itwin";

//Path
const enPath = "lib/public/locales/en";
const enUSPath = "lib/public/locales/en-US";
const imagesPath = "lib/public/images";
const cursorPath = "lib/public/cursors";
const spritesPath = "lib/public/sprites";

//Files
const iTwinViewer = "iTwinViewer.json";
const iModelJs = "iModelJs.json";
const coreTools = "CoreTools.json";
const treeWidget = "TreeWidget.json";
const propertyGrid = "PropertyGrid.json";
const uiCore = "UiCore.json";
const measureTools = "MeasureTools.json";
const iModelJsIcon = "imodeljs-icon.svg";
const cursor = "crosshair.cur";
const presentationComponents = "PresentationComponents.json";
const rulesEngine = "RulesEngine.json";
const ecPresentation = "ECPresentation.json";
const bisCore = "BisCore.json";
const uiiModelComponents = "UiIModelComponents.json";
const uiFramework = "UiFramework.json";
const uiComponents = "UiComponents.json";
const closedHand = "closedHand.cur";
const snapPointOn = "snapPointOn.png";

const nodeModulesPaths = [
  `${itwinPath}/viewer-react/${enPath}/${iTwinViewer}`,
  `${itwinPath}/core-frontend/${enPath}/${iModelJs}`,
  `${itwinPath}/core-frontend/${enPath}/${coreTools}`,
  `${itwinPath}/core-frontend/${imagesPath}/${iModelJsIcon}`,
  `${itwinPath}/core-frontend/${cursorPath}/${cursor}`,
  `${itwinPath}/core-frontend/${spritesPath}/${snapPointOn}`,
  `${itwinPath}/core-frontend/${cursorPath}/${closedHand}`,
  `${itwinPath}/tree-widget-react/${enPath}/${treeWidget}`,
  `${itwinPath}/property-grid-react/${enPath}/${propertyGrid}`,
  `${itwinPath}/core-react/${enPath}/${uiCore}`,
  `${itwinPath}/measure-tools-react/${enPath}/${measureTools}`,
  `${itwinPath}/presentation-components/${enPath}/${presentationComponents}`,
  `${itwinPath}/presentation-common/${enPath}/${rulesEngine}`,
  `${itwinPath}/presentation-common/${enPath}/${ecPresentation}`,
  `${itwinPath}/presentation-common/${enPath}/${bisCore}`,
  `${itwinPath}/imodel-components-react/${enPath}/${uiiModelComponents}`,
  `${itwinPath}/appui-react/${enPath}/${uiFramework}`,
  `${itwinPath}/components-react/${enPath}/${uiComponents}`,
];

const findTargetFolder = (nodeModulesPath) => {
  const pathMappings = [
    { pathPart: "/en-US/", target: "public/locales/en-US/" },
    { pathPart: "/en/", target: "public/locales/en/" },
    { pathPart: "/images/", target: "public/images/" },
    { pathPart: "/cursors/", target: "public/cursors/" },
    { pathPart: "/sprites/", target: "public/sprites/" },
  ];

  for (const mapping of pathMappings) {
    if (nodeModulesPath.includes(mapping.pathPart)) {
      return mapping.target;
    }
  }

  throw new Error("Error while finding the target folder");
};

nodeModulesPaths.forEach((nodeModulesPath) => {
  const targetDirectory = findTargetFolder(nodeModulesPath);
  // Créez le répertoire de destination s'il n'existe pas
  fs.mkdirSync(targetDirectory, { recursive: true });

  const targetPath = path.join(targetDirectory, path.basename(nodeModulesPath));

  // Copiez le fichier
  fs.copyFile(nodeModulesPath, targetPath, (error) => {
    if (error) {
      throw new Error(
        "Error while copying the file: (${nodeModulesPath})" + error
      );
    } else {
      console.log(
        `File copied successfully: ${nodeModulesPath} -> ${targetPath}`
      );
    }
  });
});
