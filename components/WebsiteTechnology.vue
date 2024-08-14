<template>
  <section class="website-technology">
    <!-- Framework Technology Section -->
    <div class="technology-section framework-section">
      <div class="content-wrapper">
        <h2 class="section-title">Our Framework Technology</h2>
        <p class="section-description">
          Our technology stack includes a range of popular frameworks to ensure robust and scalable solutions. 
          We have the expertise to work beyond these listed technologies, offering tailored solutions for your needs.
        </p>
        <div class="technology-list">
          <div v-for="(framework, index) in frameworks" :key="index" class="technology-item" 
               @mouseenter="onHover(framework, 'framework')" @mouseleave="onLeave('framework')">
            {{ framework }}
          </div>
        </div>
      </div>
      <div class="image-wrapper" ref="frameworkImageWrapper">
        <img :src="currentFrameworkImage" alt="Framework Technologies" class="technology-image">
      </div>
    </div>

    <!-- CMS Technology Section -->
    <div class="technology-section cms-section">
      <div class="content-wrapper">
        <h2 class="section-title">Our CMS Technology</h2>
        <p class="section-description">
          We specialize in various CMS platforms to deliver efficient content management solutions. 
          Our expertise is not limited to these technologies, and we can work with other CMS platforms as well.
        </p>
        <div class="technology-list">
          <div v-for="(cms, index) in cmsTechnologies" :key="index" class="technology-item"
               @mouseenter="onHover(cms, 'cms')" @mouseleave="onLeave('cms')">
            {{ cms }}
          </div>
        </div>
      </div>
      <div class="image-wrapper" ref="cmsImageWrapper">
        <img :src="currentCmsImage" alt="CMS Technologies" class="technology-image">
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import * as THREE from 'three';

export default {
  name: 'WebsiteTechnology',
  data() {
    return {
      frameworks: [
        'Framework Development', 'React Development', 'Angular JS Development',
        'Ruby Development', 'Django Development', 'NodeJS Development'
      ],
      cmsTechnologies: [
        'CMS Development', 'Shopify Development', 'WordPress Development',
        'GoDaddy Development', 'Wix Development', 'Squarespace Development'
      ],
      currentFrameworkImage: '/placeholder-framework.jpg',
      currentCmsImage: '/placeholder-cms.jpg',
    };
  },
  mounted() {
    this.initThreeJS();
  },
  methods: {
    onHover(technology, type) {
      // Update image based on hovered technology
      if (type === 'framework') {
        this.currentFrameworkImage = `/placeholder-${technology.toLowerCase().replace(' ', '-')}.jpg`;
      } else {
        this.currentCmsImage = `/placeholder-${technology.toLowerCase().replace(' ', '-')}.jpg`;
      }

      // Animate the hovered item
      gsap.to(event.target, {
        scale: 1.1,
        color: '#FFD700',
        duration: 0.3,
        ease: 'power2.out'
      });

      // Animate image transition
      this.animateImageTransition(type);
    },
    onLeave(type) {
      // Reset image to default
      if (type === 'framework') {
        this.currentFrameworkImage = '/placeholder-framework.jpg';
      } else {
        this.currentCmsImage = '/placeholder-cms.jpg';
      }

      // Reset animation for all items
      gsap.to('.technology-item', {
        scale: 1,
        color: '#FFFFFF',
        duration: 0.3,
        ease: 'power2.out'
      });
    },
    animateImageTransition(type) {
      const wrapper = type === 'framework' ? this.$refs.frameworkImageWrapper : this.$refs.cmsImageWrapper;
      gsap.fromTo(wrapper, 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    },
    initThreeJS() {
      // Basic Three.js setup for both sections
      ['frameworkImageWrapper', 'cmsImageWrapper'].forEach(ref => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        
        renderer.setSize(window.innerWidth / 2, window.innerHeight);
        this.$refs[ref].appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = () => {
          requestAnimationFrame(animate);
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);
        };

        animate();
      });
    }
  }
};
</script>

<style scoped>
.website-technology {
  background-color: #1a1a1a;
  color: #ffffff;
}

.technology-section {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
}

.content-wrapper {
  flex: 1;
  padding-right: 2rem;
}

.image-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.technology-item {
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.technology-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .technology-section {
    flex-direction: column;
    height: auto;
  }

  .content-wrapper, .image-wrapper {
    width: 100%;
    padding: 1rem 0;
  }
}
</style>