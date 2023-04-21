import { ColorDef } from "@itwin/core-common";
import { IModelApp } from "@itwin/core-frontend";
import {
  AbstractWidgetProps,
  StagePanelLocation,
  StagePanelSection,
  UiItemsProvider,
} from "@itwin/appui-abstract";

import { ToggleSwitch } from "@itwin/itwinui-react";

export class MyFirstUiProvider implements UiItemsProvider {
  public readonly id = "MyFirstProviderId";
  public static toggledOnce: boolean = false;
  public static originalColor: number;

  public provideWidgets(
    stageId: string,
    stageUsage: string,
    location: StagePanelLocation,
    section?: StagePanelSection
  ): ReadonlyArray<AbstractWidgetProps> {
    const widgets: AbstractWidgetProps[] = [];

    if (
      location === StagePanelLocation.Right &&
      section === StagePanelSection.Start
    ) {
      const backgroundColorWidget: AbstractWidgetProps = {
        id: "BackgroundColorWidget",
        label: "Background Color Toggle",
        getWidgetContent() {
          return (
            <div className="toggleContainer">
              <ToggleSwitch
                className="toggle-switch"
                onChange={(e) => {
                  if (MyFirstUiProvider.toggledOnce === false) {
                    MyFirstUiProvider.originalColor =
                      IModelApp.viewManager.selectedView!.displayStyle.backgroundColor.tbgr;
                    MyFirstUiProvider.toggledOnce = true;
                  }

                  const color = e.target.checked
                    ? ColorDef.computeTbgrFromString("skyblue")
                    : MyFirstUiProvider.originalColor;

                  IModelApp.viewManager.selectedView!.overrideDisplayStyle({
                    backgroundColor: color,
                  });
                }}
              />
              <p>Click to change background Color</p>
            </div>
          );
        },
      };

      widgets.push(backgroundColorWidget);
    }

    return widgets;
  }
}
