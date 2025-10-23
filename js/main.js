/** GSAP Plugin */

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);

/** GSAP Animation - Section 1 - Michel */

gsap.to("#michel",{
    x: 100,
    duration: 1,
    rotation: 90,
})



/** GSAP Animation - Section 2 - ScrollTrigger */


/**gsap.from("#window2",{
    ScrollTrigger:{
        trigger:"#section2",
        markers: true,
        start:'top 60%',
        end: 'top 20%',
        toggleActions: 'play none reverse reset'
    },
    
    x:'-100vw',
    duration:2,

})
    
*/

/*
Draggable.create("#sectionimg",{
    type: "x,y",
    bounds: "# le nom de l'id que ta mis",
    cursor: 'grab',

    onDrag: function(){
        gsap.to("#sectionimg",{
            width: '150px',
            filter: 'dropshadow(30px 10px 4px black')',
        })
    },
})

*/


