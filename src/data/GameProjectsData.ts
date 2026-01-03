import ProjectData from "@/data/ProjectData.ts";

export default [
  new ProjectData("zombie-slot-game", "Zombie Slot Game", "img/projects/zombie-thumbnail.png", `
    <p>Immersive multi-reel slot with dynamic paylines, scatter bonuses, free spins, and horror-themed VFX.</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/RubElttzOaU" title="Zombie Slot Game" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `, "#ff3f3f", false, false, [
    new ProjectData("project-v1", "Zombie Slot Game Demo", "img/projects/zombie-thumbnail.png", "", "#ff3f3f", false, false),
  ]),

  new ProjectData("vegas-empire", "Vegas Empire", "img/projects/vegas-thumbnail.png", `
    <p>Casino empire builder with interactive UI, progressive bonuses, and high-performance reel mechanics.</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/BsKxrJxeV6E" title="Vegas Empire" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `, "#ff3f3f", false, false, [
    new ProjectData("project-v1", "Vegas Empire Demo", "img/projects/vegas-thumbnail.png", "", "#ff3f3f", false, false),
  ]),

  new ProjectData("new-project", "New Project", "img/projects/coming-soon-thumbnail.png", `
    <p>Coming Soon — Next-gen multiplayer or advanced slot experience in development.</p>
  `, "#ff3f3f", false, false, [
    new ProjectData("project-v1", "Coming Soon", "img/projects/coming-soon-thumbnail.png", "", "#ff3f3f", false, false),
  ]),
];