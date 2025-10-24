


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

/* function TitleResize () {

    const currentWindowWidth = window.innerWidth;
    const TitleChar = document.querySelector(".title-background");


    TitleChar.style.scale = 


} */



function ScrollAniContent () {

    const currentScrollY = window.pageYOffset;
    const currentWindowHeight = window.innerHeight;
    const titlechar = document.querySelectorAll(".Mix_T");
    
    
    if (currentScrollY > (currentWindowHeight*0.3)) {
        for(i=0;i<titlechar.length;i++) {
            titlechar[i].classList.add(`ani${i}`)
        }
    } else if (currentScrollY === 0) {
        for(i=0;i<titlechar.length;i++) {
            titlechar[i].classList.remove(`ani${i}`)
        }
    }
}


//스크롤시 요소들 페이드인 페이드아웃
{
    const ScrollFades = document.querySelectorAll(".studio-introphoto, .discocontent, .mainarticle.lastwords ")
    const titlechar = document.querySelectorAll(".Mix_T");



    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    // 요소의 상단이 뷰포트 하단에 닿을 때
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            else {
                 entry.target.classList.remove('visible');
            }
        });
        }, {
        root: null,
        rootMargin: "0px 0px -15% 0px", // 하단을 기준으로
        threshold: 0
        });

        ScrollFades.forEach(el => observer.observe(el));
        titlechar.forEach(el => observer.observe(el));

}

//페이드 인만
{
{
    const ScrollFades = document.querySelectorAll(".placecontenttop, .why, .mainarticle, .placemainarticle, .works")




    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    // 요소의 상단이 뷰포트 하단에 닿을 때
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
        }, {
        root: null,
        rootMargin: "0px 0px -10% 0px", // 하단을 기준으로
        threshold: 0
        });

        ScrollFades.forEach(el => observer.observe(el));


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




{ window.addEventListener("scroll" ,() => {
        const currentScrollY = window.pageYOffset
        const currentWindowHeight = window.innerHeight;
        const currentWindowWidth = window.innerWidth;

        ScrollAniContent();    
        titleScrollOpacity();
        titleScrollTop ();

        

        
        
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
    placeSize.style.height = `${window.innerHeight + gearlistHeight + 100}px`
    }

function ClickHeightReset ()
    {
    const placeSize = document.getElementById("placecontent");
    const gearlist = document.querySelector(".gearlistmenu");
    placeSize.removeAttribute("style");

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
    
    placeSize.style.height = `${window.innerHeight + gearlistHeight + 100}px`
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



