<template>
  <div>
    <h1>Resume</h1>

    <div class="download-link">
      <a href="/resume.pdf" download>
        <i class="fa fa-download fa-2x fa-fw"></i>
        <span>Download resume</span>
      </a>
    </div>

    <div class="paragraph">
      Experienced Game and Unity Developer with a passion for gaming from an early age. I’ve honed my skills over the past 5 years, specializing in Unity and game development. Committed to continuous learning and excellence in all aspects of game creation, from gameplay mechanics to user interface design.
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Kishan Jaiswal" /> 
    </div>

    <div class="full-content">
      <div>
        <h2>Skills</h2>

        <div class="skill-set">
          <h3>Programming</h3>
          <SkillRate v-bind:name="'C++'" v-bind:rate="5" />
          <SkillRate v-bind:name="'C#'" v-bind:rate="5" />
          <SkillRate v-bind:name="'Game Programming'" v-bind:rate="5" />
          <SkillRate v-bind:name="'JSON'" v-bind:rate="4" />
          <SkillRate v-bind:name="'RESTful API'" v-bind:rate="4" />
          <SkillRate v-bind:name="'Photon Fusion'" v-bind:rate="5" />
          <SkillRate v-bind:name="'SOLID Principles'" v-bind:rate="5" />
          <SkillRate v-bind:name="'OOP'" v-bind:rate="5" />
        </div>

        <div class="skill-set">
          <h3>Technology</h3>
          <SkillRate v-bind:name="'Unity'" v-bind:rate="5" />
          <SkillRate v-bind:name="'Animation'" v-bind:rate="5" />
          <SkillRate v-bind:name="'Timeline (Unity)'" v-bind:rate="5" />
          <SkillRate v-bind:name="'Addressables (Unity)'" v-bind:rate="5" />
          <SkillRate v-bind:name="'VFX (Unity)'" v-bind:rate="5" />
          <SkillRate v-bind:name="'Particle System (Unity)'" v-bind:rate="5" />
        </div>

        <div class="skill-set">
          <h3>Design Patterns</h3>
          <SkillRate v-bind:name="'Observer Pattern'" v-bind:rate="5" />
          <SkillRate v-bind:name="'Singleton Pattern'" v-bind:rate="5" />
          <SkillRate v-bind:name="'State Pattern'" v-bind:rate="5" />
          <SkillRate v-bind:name="'Command Pattern'" v-bind:rate="5" />
          <SkillRate v-bind:name="'MVCS'" v-bind:rate="5" />
        </div>

        <div class="skill-set">
          <h3>Mechanics</h3>
          <SkillRate v-bind:name="'Gameplay Mechanics'" v-bind:rate="5" />
          <SkillRate v-bind:name="'Pathfinding'" v-bind:rate="4" />
        </div>

        <div class="skill-set">
          <h3>User Interface</h3>
          <SkillRate v-bind:name="'UI (Design)'" v-bind:rate="5" />
          <SkillRate v-bind:name="'Unity 2D/3D'" v-bind:rate="5" />
        </div>

        <div class="skill-set">
          <h3>Platform Expertise</h3>
          <SkillRate v-bind:name="'Mobile'" v-bind:rate="5" />
          <SkillRate v-bind:name="'Mac/PC'" v-bind:rate="5" />
          <SkillRate v-bind:name="'WebGL'" v-bind:rate="5" />
        </div>
      </div>

      <div>
        <h2>Experience</h2>

        <div class="experience-item">
          <h3>Bilions</h3>
          <h4>Unity Developer</h4>
          <h4>June 2024 – Present (1 year 8 months)</h4>
          <h4>Austin, Texas, United States</h4>
          <p>Currently involved in developing cutting-edge casino slot machine games for the casino gaming industry, focused on delivering a seamless and engaging player experience. Our games feature multi-reel configurations, dynamic paylines, and a range of exciting bonus bonus mechanics such as free spins, scatter wins, and auto-spin options.</p>
          <p>Key contributions include:</p>
          <ul>
            <li>Designing immersive UI/UX tailored to enhance the player's interaction and overall experience.</li>
            <li>Implementing a highly reliable Random Number Generator (RNG) to ensure fairness and unpredictability in outcomes.</li>
            <li>Developing a modular and scalable game framework that allows for easy customization and the creation of unique game themes.</li>
            <li>Optimizing game performance across multiple platforms, ensuring smooth gameplay and high-quality visuals.</li>
          </ul>
        </div>

        <div class="experience-item">
          <h3>Upwork</h3>
          <h4>Unity Developer</h4>
          <h4>December 2023 – July 2024 (8 months)</h4>
          <h4>Varanasi, Uttar Pradesh, India</h4>
          <p>Freelance Unity development projects.</p>
        </div>

        <div class="experience-item">
          <h3>Appzia Technologies</h3>
          <h4>Mid Level Unity Developer</h4>
          <h4>September 2023 – November 2023 (3 months)</h4>
          <h4>Pune, Maharashtra, India</h4>
          <p>Develop core chess gameplay mechanics, including piece movement, turn based play, and rule enforcement, while staying true to the traditional rules and strategies.</p>
          <p>Created vibrant 3D graphics using Unity and Unreal to achieve optimum results.</p>
          <p>Design and create an engaging and intuitive user interface, complete with interactive features like legal move highlighting, pawn promotion, and piece management.</p>
          <p>Establish a robust multiplayer system, enabling global player competition through network functionality, player accounts, and real-time game synchronization.</p>
          <p>Optionally, work on chess AI development with adjustable difficulty levels and AI adaptation to player skills.</p>
          <p>Enhance gameplay with sound effects, animations, and visual cues for moves and captures.</p>
          <p>Implement features like game save/load, move undo, and draw offers.</p>
          <p><a href="https://www.appziatech.com/" target="_blank">Project Link</a></p>
        </div>

        <div class="experience-item">
          <h3>PhiBonacci Solutions</h3>
          <h4>Unity Developer</h4>
          <h4>August 2022 – June 2023 (11 months)</h4>
          <h4>Ahmedabad, Gujarat, India</h4>
          <p>Proficient in problem analysis and solution implementation.</p>
          <p>Skilled in planning and developing game functionality, optimizing performance, and ensuring quality.</p>
          <p>Collaborated on 50 projects, leading a team of 15 programmers to create gameplay and mechanics.</p>
          <p>Designed responsive game UI for various platforms, including Windows, Linux, mobile, AR, and VR.</p>
          <p>Extensive experience with animations, including Animation Events, Animator Controllers, Blend Shapes, and Avatar Masks for humanoid models. Proficient in Unity Addressable and Unity Timeline.</p>
          <p>Utilized DoTween plugins for enhanced functionality.</p>
          <p><a href="https://demo.phibonacci.com/" target="_blank">Projects Link</a></p>
        </div>

        <div class="experience-item">
          <h3>Outscal</h3>
          <h4>Full Stack Game Developer</h4>
          <h4>January 2021 – July 2022 (1 year 7 months)</h4>
          <h4>Delhi, India</h4>
          <p>Designed and developed user-friendly interfaces, enhancing player engagement and immersion.</p>
          <p>Integrated third-party plugins and tools to streamline development and enhance game features.</p>
          <p>Played a key role in creating comprehensive game design documents, detailing technical specifications.</p>
          <p>Used C# and Unity to build interactive gameplay elements, AI behaviors, and visually appealing UI.</p>
          <p>Optimized game performance by employing efficient coding practices and advanced profiling techniques.</p>
          <p>Actively contributed to brainstorming sessions, fostering innovative game concepts and mechanics.</p>
          <p><a href="https://www.outscal.com/" target="_blank">Projects Link</a></p>
        </div>
      </div>

      <div>
        <h2>Education</h2>

        <div class="experience-item">
          <h3>Outscal</h3>
          <h4>Diploma of Education, Computer Games and Programming Skills</h4>
          <h4>September 2020 – January 2021</h4>
        </div>

        <div class="experience-item">
          <h3>Government Polytechnic Shahjahanpur</h3>
          <h4>Diploma of Education, Computer Science</h4>
          <h4>July 2018 – August 2021</h4>
        </div>

        <div class="experience-item">
          <h3>S.K.C.S.V. Inter College</h3>
          <h4>High School Diploma, Mathematics</h4>
          <h4>July 2015 – July 2017</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.experience-item {
  margin-bottom: 30px;
}

.experience-item p {
  margin-top: 10px;
}

.experience-item ul {
  list-style-type: disc;
  margin-top: 10px;
  padding-left: 20px;
}

.experience-item li {
  margin-bottom: 5px;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>