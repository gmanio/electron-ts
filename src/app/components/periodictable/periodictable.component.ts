import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

declare var THREE;
declare var requestAnimationFrame;

// import * as TWEEN from 'three/examples/js/libs/tween.min.js';
import 'three/examples/js/objects/Reflector.js';
import 'three/examples/js/controls/OrbitControls.js';

@Component({
  selector: 'app-periodictable',
  templateUrl: './periodictable.component.html',
  styleUrls: ['./periodictable.component.scss']
})
export class PeriodictableComponent implements OnInit, AfterViewInit {
  public WIDTH = window.innerWidth;
  public HEIGHT = window.innerHeight;
  // camera
  public VIEW_ANGLE = 45;
  public ASPECT = this.WIDTH / this.HEIGHT;
  public NEAR = 1;
  public FAR = 500;
  public camera;
  public scene;
  public renderer;
  public cameraControls;
  public sphereGroup;
  public smallSphere;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.init();
    this.animate();
  }

  public init() {
    const container = this.el.nativeElement.querySelector('#container');
    // renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
    container.appendChild(this.renderer.domElement);
    // scene
    this.scene = new THREE.Scene();
    // camera
    this.camera = new THREE.PerspectiveCamera(this.VIEW_ANGLE, this.ASPECT, this.NEAR, this.FAR);
    this.camera.position.set(0, 75, 160);
    this.cameraControls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.cameraControls.target.set(0, 40, 0);
    this.cameraControls.maxDistance = 400;
    this.cameraControls.minDistance = 10;
    this.cameraControls.update();
    //
    const planeGeo = new THREE.PlaneBufferGeometry(100.1, 100.1);
    // reflector/mirror planes
    const groundMirror = new THREE.Reflector(100, 100, {
      clipBias: 0.003,
      textureWidth: this.WIDTH * window.devicePixelRatio,
      textureHeight: this.HEIGHT * window.devicePixelRatio,
      color: 0x777777,
      recursion: 1
    });
    groundMirror.rotateX(-Math.PI / 2);
    this.scene.add(groundMirror);
    const verticalMirror = new THREE.Reflector(60, 60, {
      clipBias: 0.003,
      textureWidth: this.WIDTH * window.devicePixelRatio,
      textureHeight: this.HEIGHT * window.devicePixelRatio,
      color: 0x889999,
      recursion: 1
    });
    verticalMirror.position.y = 35;
    verticalMirror.position.z = -45;
    this.scene.add(verticalMirror);
    this.sphereGroup = new THREE.Object3D();
    this.scene.add(this.sphereGroup);
    const geometry1 = new THREE.CylinderGeometry(0.1, 15 * Math.cos(Math.PI / 180 * 30), 0.1, 24, 1);
    const material1 = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0x444444 });
    const sphereCap = new THREE.Mesh(geometry1, material1);
    sphereCap.position.y = -15 * Math.sin(Math.PI / 180 * 30) - 0.05;
    sphereCap.rotateX(-Math.PI);
    const geometry2 = new THREE.SphereGeometry(15, 24, 24, Math.PI / 2, Math.PI * 2, 0, Math.PI / 180 * 120);
    const halfSphere = new THREE.Mesh(geometry2, material1);
    halfSphere.add(sphereCap);
    halfSphere.rotateX(-Math.PI / 180 * 135);
    halfSphere.rotateZ(-Math.PI / 180 * 20);
    halfSphere.position.y = 7.5 + 15 * Math.sin(Math.PI / 180 * 30);
    this.sphereGroup.add(halfSphere);
    const geometry3 = new THREE.IcosahedronGeometry(5, 0);
    const material2 = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0x333333, flatShading: true });
    this.smallSphere = new THREE.Mesh(geometry3, material2);
    this.scene.add(this.smallSphere);
    // walls
    const planeTop = new THREE.Mesh(planeGeo, new THREE.MeshPhongMaterial({ color: 0xffffff }));
    planeTop.position.y = 100;
    planeTop.rotateX(Math.PI / 2);
    this.scene.add(planeTop);
    const planeBack = new THREE.Mesh(planeGeo, new THREE.MeshPhongMaterial({ color: 0xffffff }));
    planeBack.position.z = -50;
    planeBack.position.y = 50;
    this.scene.add(planeBack);
    const planeFront = new THREE.Mesh(planeGeo, new THREE.MeshPhongMaterial({ color: 0x7f7fff }));
    planeFront.position.z = 50;
    planeFront.position.y = 50;
    planeFront.rotateY(Math.PI);
    this.scene.add(planeFront);
    const planeRight = new THREE.Mesh(planeGeo, new THREE.MeshPhongMaterial({ color: 0x00ff00 }));
    planeRight.position.x = 50;
    planeRight.position.y = 50;
    planeRight.rotateY(-Math.PI / 2);
    this.scene.add(planeRight);
    const planeLeft = new THREE.Mesh(planeGeo, new THREE.MeshPhongMaterial({ color: 0xff0000 }));
    planeLeft.position.x = -50;
    planeLeft.position.y = 50;
    planeLeft.rotateY(Math.PI / 2);
    this.scene.add(planeLeft);
    // lights
    const mainLight = new THREE.PointLight(0xcccccc, 1.5, 250);
    mainLight.position.y = 60;
    this.scene.add(mainLight);
    const greenLight = new THREE.PointLight(0x00ff00, 0.25, 1000);
    greenLight.position.set(550, 50, 0);
    this.scene.add(greenLight);
    const redLight = new THREE.PointLight(0xff0000, 0.25, 1000);
    redLight.position.set(-550, 50, 0);
    this.scene.add(redLight);
    const blueLight = new THREE.PointLight(0x7f7fff, 0.25, 1000);
    blueLight.position.set(0, 50, 550);
    this.scene.add(blueLight);
  }

  public animate() {
    requestAnimationFrame(() => {
      this.animate();
    });
    const timer = Date.now() * 0.01;
    this.sphereGroup.rotation.y -= 0.002;
    this.smallSphere.position.set(
      Math.cos(timer * 0.1) * 30,
      Math.abs(Math.cos(timer * 0.2)) * 20 + 5,
      Math.sin(timer * 0.1) * 30
    );
    this.smallSphere.rotation.y = ( Math.PI / 2 ) - timer * 0.1;
    this.smallSphere.rotation.z = timer * 0.8;
    this.renderer.render(this.scene, this.camera);

  }
}



