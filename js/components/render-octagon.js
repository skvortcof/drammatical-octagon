/**
 * Days Counter
 */

let renderOctagon = () => {

  let module = {},

    init = () => {


      function main() {
        const canvas = document.querySelector('#canvas');
        const renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true
        });

        const fov = 75;
        const aspect = 2; // the canvas default
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 2;

        const scene = new THREE.Scene();
        //scene.background = new THREE.Color( 0xffffff );

        {
          const color = 0xcccccc;
          const intensity = 1;
          const light = new THREE.DirectionalLight(color, intensity);
          light.position.set(-1, 2, 4);
          scene.add(light);
        }

        const boxWidth = 1;
        const boxHeight = 0;
        const geometry = new THREE.DodecahedronBufferGeometry(boxWidth, boxHeight);

        function makeInstance(geometry, color, x) {
          const material = new THREE.MeshBasicMaterial({
             color: color, wireframe: true, wireframeLinewidth: 1
          });

          const cube = new THREE.Mesh(geometry, material);
          scene.add(cube);

          cube.position.x = x;

          return cube;
        }

        const cubes = [
          makeInstance(geometry, 0xcccccc, 1),
        ];

        function resizeRendererToDisplaySize(renderer) {
          const canvas = renderer.domElement;
          const pixelRatio = window.devicePixelRatio;
          const width = canvas.clientWidth * pixelRatio | 0;
          const height = canvas.clientHeight * pixelRatio | 0;
          const needResize = canvas.width !== width || canvas.height !== height;
          if (needResize) {
            renderer.setSize(width, height, false);
          }
          return needResize;
        }

        function render(time) {
          time *= 0.0001;

          if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
          }

          cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * .1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
          });

          renderer.render(scene, camera);

          requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
      }

      main();

    };

  module.init = init;

  return module;

};

export default renderOctagon();