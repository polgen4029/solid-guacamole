{
    //타이틀 애니메이션
    const titleAni = document.querySelectorAll('.char');
    titleAni.forEach(char => {
        char.addEventListener('mouseenter', () => {
        char.classList.remove('animate');
        void char.offsetWidth;
    char.classList.add('animate');
    });
});
}



function FadeContent () {
    const currentScrollY = window.pageYOffset;
    const currentWindowHeight = window.innerHeight;

    const fadeWhy = document.getElementById("why");
    const titlechar = document.querySelectorAll(".Mix_T");
    const introarticle = document.getElementById("main");

    //Why 나타나기
    if (currentScrollY > (currentWindowHeight*0.3)) {
        fadeWhy.classList.add("visible");
    } else {
        fadeWhy.classList.remove("visible");
    }

    //NUMSIL 글자들 나타나기
    if (currentScrollY > (currentWindowHeight*0.3)) {
        titlechar.forEach(titlechar =>
        {titlechar.classList.add("visible")}
        )
    } else {
        titlechar.forEach(titlechar =>
        {titlechar.classList.remove("visible")}
        );
    }

    
    //소개글 나타나기
    if (currentScrollY > (currentWindowHeight/2)) {
        introarticle.classList.add("visible");
    } else {
        introarticle.classList.remove("visible");
    }
}





function ScrollAniContent () {

    const currentScrollY = window.pageYOffset;
    const currentWindowHeight = window.innerHeight;
    const titlechar = document.querySelectorAll(".Mix_T");
    
    
    if (currentScrollY > (currentWindowHeight*0.4)) {
        for(i=0;i<titlechar.length;i++) {
            titlechar[i].classList.add(`ani${i}`)
        }
    } else {
        for(i=0;i<titlechar.length;i++) {
            titlechar[i].classList.remove(`ani${i}`)
        }
    }
}

function titleScrollOpacity () {
    const titleView = document.querySelector(".title")
    const currentScrollY = window.pageYOffset
    const currentWindowHeight = window.innerHeight;

    titleView.style.filter = (`blur(${(currentScrollY/currentWindowHeight)*30}px)`)

}

function titleScrollTop () {
    const titleView = document.querySelector(".title")
    const currentScrollY = window.pageYOffset
    const currentWindowHeight = window.innerHeight;

    titleView.style.top = -(currentScrollY)*0.3 + 'px'
    if ((currentScrollY===currentWindowHeight)) {
        return
    }
    
    console.log(currentScrollY)
    console.log(currentWindowHeight)

}




{       
    window.addEventListener('scroll', () => {

        const currentScrollY = window.pageYOffset
        const currentWindowHeight = window.innerHeight;

        FadeContent();
        ScrollAniContent();
    

        if((currentScrollY<currentWindowHeight)) {
        titleScrollTop();
        titleScrollOpacity();
        }
    `   `
        
       
   
    });
}

    function setVh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('resize', setVh);
    setVh();


{ window.addEventListener("scroll" ,() => {
    const currentScrollY = window.pageYOffset
        const currentWindowHeight = window.innerHeight;

        FadeContent();
        ScrollAniContent();
    

        if((currentScrollY<currentWindowHeight)) {
        titleScrollTop();
        titleScrollOpacity();
        }
})}

{
    window.onload = function() {
        // 모든 이미지와 요소가 로드된 후 바디를 표시
        document.body.classList.add('visible'); // 바디에 클래스 추가로 페이드 효과 적용
    };
}


//Gearlist position 설정 

{
    const contentTop = document.querySelector(".placecontenttop");
    const gearlistposition = document.querySelector(".gearlistmenu");

    const contentTopHeight = contentTop.offsetHeight;
    gearlistposition.style.top = `${contentTopHeight}px`
    

}
//Ratelist position 설정
{
    const contentTop = document.querySelector(".placecontenttop");
    const ratemenuposition = document.querySelector(".ratemenu");

    const contentTopHeight = contentTop.offsetHeight;
    ratemenuposition.style.top = `${contentTopHeight}px`
    

}

//기본 상태에서 Gearlist 클릭시 요소 실행
{

let isGearActive = false;
let isRateActive = false;

//placecontent 높이 늘리기
function ClickHeightSet ()
    {
    const placeSize = document.getElementById("placecontent");
    const gearlist = document.querySelector(".gearlistmenu");
    placeSize.removeAttribute("style");


    const gearlistHeight = gearlist.offsetHeight;
    placeSize.style.height = `${window.innerHeight + gearlistHeight}px`
    }

function ClickHeightReset ()
    {
    const placeSize = document.getElementById("placecontent");
    const gearlist = document.querySelector(".gearlistmenu");
    placeSize.removeAttribute("style");
    console.log("a")
    //const gearlistHeight = gearlist.offsetHeight;
    //placeSize.style.height = `${placeSize.offsetHeight - gearlistHeight}px`
    }




//소개글 위치 이동
function ClickPositionSet ()
    {
    const mainArticle = document.querySelector(".placemainarticle");
    const gearlist = document.querySelector(".gearlistmenu");

    const gearlistHeight = gearlist.offsetHeight;
    mainArticle.style.top = `${gearlistHeight}px`

    }

function ClickPositionReset ()
    {
    const mainArticle = document.querySelector(".placemainarticle");
    const gearlist = document.querySelector(".gearlistmenu");

    const currentArticleTop =   parseInt(mainArticle.style.top,10);

    const gearlistHeight = gearlist.offsetHeight;

    const newHeight = currentArticleTop - gearlistHeight;

    mainArticle.style.top = `${newHeight}px`
    
    }










//메뉴 opacity 조정
function ClickMenuOpacitySet ()
    {
    const gearlist = document.querySelector(".gearlistmenu");
    gearlist.classList.add("visible");
    }

    function ClickMenuOpacityReset ()
    {
    const gearlist = document.querySelector(".gearlistmenu");
    gearlist.classList.remove("visible");
    }



//무상태에서 메뉴 내려오는 상황
{
    const gearlistClick = document.getElementById("gearlistclick");
    

    gearlistClick.addEventListener("click", ()=>{

        if(!isGearActive && !isRateActive) {
        ClickHeightSet ()
        ClickPositionSet ()
        ClickMenuOpacitySet ()
        }

        else if (!isGearActive) 
        {
        ClickPositionReset ()
        ClickRateMenuOpacityReset ()    
        ClickRateHeightReset()
       

        ClickHeightSet ()
        ClickPositionSet ()
        ClickMenuOpacitySet ()
       
        
        isRateActive = !isRateActive;

        }
        else if (isGearActive) {
        ClickHeightReset ()
        ClickPositionReset ()
        ClickMenuOpacityReset ()
        }

        isGearActive = !isGearActive;
       

        });


}

//초기 상태에서 Rate메뉴를 클릭하는 경우


    

//placecontent 높이 늘리기
function ClickRateHeightSet ()
    {
    const placeSize = document.getElementById("placecontent");
    const gearlist = document.querySelector(".ratemenu");
    //편의상 변수 이름은 수정하지 않음
    const gearlistHeight = gearlist.offsetHeight;
    placeSize.removeAttribute("style");
    
    placeSize.style.height = `${window.innerHeight + gearlistHeight}px`
    }

function ClickRateHeightReset ()
    {
    const placeSize = document.getElementById("placecontent");
    const gearlist = document.querySelector(".ratemenu");

    placeSize.removeAttribute("style");
    console.log("a")
    }




//소개글 위치 이동
function ClickRatePositionSet ()
    {
    const mainArticle = document.querySelector(".placemainarticle");
    const gearlist = document.querySelector(".ratemenu");

    const gearlistHeight = gearlist.offsetHeight;
    mainArticle.style.top = `${gearlistHeight}px`
    }

function ClickRatePositionReset ()
    {
    const mainArticle = document.querySelector(".placemainarticle");
    const gearlist = document.querySelector(".ratemenu");

    const currentArticleTop =   parseInt(mainArticle.style.top,10);
    const gearlistHeight = gearlist.offsetHeight;

    const newHeight = currentArticleTop - gearlistHeight;

    mainArticle.style.top = `${newHeight}px`

    }




//메뉴 opacity 조정
function ClickRateMenuOpacitySet ()
    {
    const gearlist = document.querySelector(".ratemenu");
    gearlist.classList.add("visible");
    }

    function ClickRateMenuOpacityReset ()
    {
    const gearlist = document.querySelector(".ratemenu");
    gearlist.classList.remove("visible");
    }



//무상태에서 메뉴 내려오는 상황
{
    const ratelistClick = document.getElementById("ratelistclick");

    ratelistClick.addEventListener("click", ()=>{

        if(!isRateActive && !isGearActive) {
        ClickRateHeightSet ()
        ClickRatePositionSet ()
        ClickRateMenuOpacitySet ()
        }

        else if(!isRateActive) {
        
       
        ClickPositionReset ()
        ClickMenuOpacityReset ()
        ClickHeightReset ()
     

        ClickRateHeightSet ()
        ClickRatePositionSet ()
        ClickRateMenuOpacitySet ()
    

        isGearActive = !isGearActive;

        }

        else if (isRateActive) {
        ClickRateHeightReset ()
        ClickRatePositionReset ()
        ClickRateMenuOpacityReset ()
        }

        isRateActive = !isRateActive;
        

        });


}
}



