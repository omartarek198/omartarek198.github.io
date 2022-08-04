
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
import { EffectComposer } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/postprocessing/UnrealBloomPass.js";
import { AfterimagePass } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/postprocessing/AfterimagePass.js';

import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
 

var scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x00000, 0.005);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("myScene").appendChild( renderer.domElement );
let w = window.innerWidth;
let h = window.innerHeight;

console.log(w);

window.addEventListener('resize', function ()
{

    //Making 3d design responsive
    var width = this.window.innerWidth;
    var height = this.window.innerHeight; 
    
    renderer.setSize(width, height);
    
    camera.aspect = width / height;
    camera.postion.z *= 1709/ w; 
    camera.updateProjectionMatrix();
})

const renderScene = new RenderPass(scene, camera);
                                      // resolution, strength, radius, threshold
const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.0, 0, 0);

const afterImagePass = new AfterimagePass();

const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);
composer.addPass(afterImagePass);
var AnimateOne = true
const geometry = new THREE.IcosahedronBufferGeometry(10,2);
const material = new THREE.MeshBasicMaterial({ color: "#BB86FC",wireframe:{} });
const torus = new THREE.Mesh(geometry, material);
const points_geometry = new THREE.BufferGeometry();
points_geometry.dynamic = true;
console.log( geometry.attributes.position)
points_geometry.setAttribute('position', geometry.attributes.position);

const points_material = new THREE.PointsMaterial({ size: 0.2, color: "#BB86FC", vertexColors: false });
const points = new THREE.Points(points_geometry, points_material);


// scene.add(torus);
scene.add(points);
// creating orbs
var orb_points = [];
orb_points.push( new THREE.Vector3( - 15, 0, 0 ) );

const orb_material = new THREE.PointsMaterial({ size:.5, color: "#FFFFFF", vertexColors: false });

var orb_geometry = new THREE.BufferGeometry().setFromPoints(orb_points);
const Lorbs = new THREE.Points(orb_geometry, orb_material);
 orb_points = [];
orb_points.push(new THREE.Vector3(15, 0, 0));
//  orb_points.push(new THREE.Vector3(points.geometry.attributes.position.array[0], points.geometry.attributes.position.array[1], points.geometry.attributes.position.array[2]));

orb_geometry = new THREE.BufferGeometry().setFromPoints(orb_points);
const Rorbs = new THREE.Points(orb_geometry, orb_material);
scene.add(Rorbs);
scene.add(Lorbs);

camera.position.z = 30 * (w/1709) * 1709/w;
var torusRotateSpeed = 0.005;
var AnimateOne = true;
var AnimateTwo = false;
var AnimateThree = false;

var AnimateFour = false;
var AnimateFive = false;
var AnimateSix = false;
var AnimateSeven = false;



var particles = [];
var MakeSmallParticles = function ()
{
    points.geometry.verticesNeedUpdate = true;
    for (var i = 0; i < points.geometry.attributes.position.count * 3; i++)
    {
        var currPoint = points.geometry.attributes.position;
        var _points = [];
        _points.push( new THREE.Vector3( currPoint.array[i], currPoint.array[i+1], currPoint.array[i+2] ) );
        var partGeo = new THREE.BufferGeometry().setFromPoints(_points);
        var tempPart = new THREE.Points(partGeo, points_material);
        scene.add(tempPart);
        particles.push(tempPart);
    }

    
}

var MakeSocialsVisible = function()
{
    var socials = document.getElementById('page');
    socials.style.visibility = "visible";
     socials = document.getElementById('1');
    socials.style.visibility = "visible";
     socials = document.getElementById('Socials');
    socials.style.visibility = "visible";
    //  socials = document.getElementById('omar');
    // socials.style.visibility = "visible";
    

      
}

var newParticles;
var MakeRod = function ()
{
    const geometryy = new THREE.CylinderBufferGeometry( 5, 5, 10, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00}, {wireframe : false} );
    rod = new THREE.Mesh(geometryy, material);
    
    const points_geometry = new THREE.BufferGeometry();
    points_geometry.dynamic = true;
    console.log(geometryy);
     points_geometry.setAttribute('position', geometryy.attributes.position);
    // points_geometry.translate( -19, 0, 0);
const points_material = new THREE.PointsMaterial({ size: 0.2, color: "#BB86FC", vertexColors: false });
 newParticles = new THREE.Points(points_geometry, points_material);

    
    
    scene.add(newParticles);

    newParticles.geometry.verticesNeedUpdate = true;
   
    }
var barier = -20;
var rod;

var github = document.getElementById("gpng");

github.addEventListener("mouseover", function( event ) { 
    github.src = "gitLit.png    ";
    console.log("INNN");
});

github.addEventListener("mouseleave", function( event ) { 
    github.src = "gitDim.png";
});

var linkedin = document.getElementById("linkedin");

linkedin.addEventListener("mouseover", function( event ) { 
    linkedin.src = "LinkedLit.png    ";
});

linkedin.addEventListener("mouseleave", function( event ) { 
    linkedin.src = "LinkedDim.png";
});
var CreateMyName2d = function ()
{
          var text2 = document.createElement('div');
text2.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
text2.style.width = 100;
    text2.style.height = 100;
    text2.style.color = "#00FFFF";
    text2.style.fontSize = 90 + 'px';
    text2.style.fontFamily = "Montserrat";
text2.style.backgroundColor = "black";
text2.innerHTML = "M A R!";
text2.style.top = 400 + 'px';
text2.style.left = 400 + 'px';
document.body.appendChild(text2);
}

var CreateMyName3d = function ()
{
 
  var img = document.createElement('img');
            img.src = 
        'mar.png';
        img.style.position = "absolute";
            img.style.top = 200 + 'px';
img.style.left = 400 + 'px';
    document.body.appendChild(img);
    

     var img2 = document.createElement('img');
            img2.src = 'tarek.png';
        img2.style.position = "absolute";
            img2.style.top = 200+ 'px';
img2.style.left = 650 + 'px';
            document.body.appendChild(img2);
}
    
var nameCreated = false;
// MakeSmallParticles();
var zoomIn_index = 0.05;
var update = function () {

    if (AnimateOne) {
        torus.rotation.y += torusRotateSpeed;
        points.rotation.y += torusRotateSpeed;
    
        if (camera.position.z > 15) {
            // camera.position.z -= 0.05;
        
        }
        // Rorbs.rotation.y -= torusRotateSpeed * 2;
    




        // Rorbs.position.x = Rorbs.geometry.attributes.position.array[0] += 0.1;
        console.log(points)
        // Rorbs.geometry.vertices[0].x += 0.1;
        Rorbs.geometry.verticesNeedUpdate = true;
       

    Rorbs.rotation.z += 0.00;
    Lorbs.rotation.y += torusRotateSpeed * 2;
        

   
    // Lorbs.rotation.y-=torusRotateSpeed;
    
        if ( torusRotateSpeed >= 0.05) {
         
        camera.position.z -= zoomIn_index;
            zoomIn_index += 0.0005;
        }
        torusRotateSpeed += 0.0001;
        
        if (torusRotateSpeed >= 0.1) {


            AnimateTwo = true;
            AnimateOne = false;
        }
    }
    if (AnimateTwo)
    {
        //  MakeSmallParticles();
        
        
        if (camera.position.z >= 30* (w/1709))
        {
        AnimateTwo = false;
        AnimateThree = true;
            
        }
        else {
            camera.position.z += zoomIn_index+0.001;
        }
        
        // camera.position.x = 120;
        // camera.position.y = -25;

        
    }
    if (AnimateThree)
    // {
        {
        //    for (var i = 0; i < particles.length/6; i++)
        //    {
             
        //        particles[i].position.x -= 0.5;
        //        var temp = new THREE.Vector3();
        //        temp = particles[i].position;

        //        particles[i]. position =  
        //        if (particles[i].position.x < barier)
        //        {
        //         //    barier += 1;
        //            AnimateThree = false;
        //            AnimateFour = true;
        //     }    
               
        
    //     }
            

        camera.position.z /=  (w*1.25/1709);
        scene.remove(points); 
        MakeRod();
        AnimateFour = true;
        AnimateThree = false;
    }
    
    if (AnimateFour)
    {
        newParticles.rotation.z += 0.05;
 
        if (!nameCreated)
        {
            //  MakeSocialsVisible();
            nameCreated = true;
        }
        // renderer.setSize(0, 0);
        // newParticles.position.y -= 0.1;
    }
//  for (var i = 0; i < particles.length; i++)
//            {
             
//             particles[i].rotation.y +=0.005;    
             
               
        
//         }
    

}

var render = function ()
{

    
    composer.render(scene, camera);
}

var GameLoop = function () {

    requestAnimationFrame(GameLoop);
    update();
    render(); 
};

GameLoop();


