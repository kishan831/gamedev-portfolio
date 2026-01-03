export default class ProjectData {
  id: string;
  name: string;
  htmlDescription: string;
  iconUrl: string;
  isWide: boolean;
  isHigh: boolean;
  accentColor: string;
  children: ProjectData[];

  constructor(
    id: string,
    name: string,
    iconUrl: string,
    html: string,
    accentColor = "#000000",
    isHigh = false,
    isWide = false,
    children: ProjectData[] = []
  ) {
    this.id = id;
    this.name = name;
    this.htmlDescription = html;
    this.iconUrl = iconUrl;
    this.isHigh = isHigh;
    this.isWide = isWide;
    this.accentColor = accentColor;
    this.children = children;
  }
}
