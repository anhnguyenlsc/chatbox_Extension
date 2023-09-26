const chatContainer = document.createElement('div');
const chatContainerTemplate =

    `
    <div class="chat">
        <div class="chat-screen">
            <!-- Chat home page -->
            <div class="chat-home">
                <div class="chat-header">
                    <div class="chat-header-button">
                        <p>P</p>
                    </div>
                    <div class="chat-header-title"><a href="">Pansoft</a></div>
                </div>


                <div class="chat-welcome">
                    <p>Welcome to Chat Bot extension service</p>
                </div>

                <div class="chat-fill-form">
                    <div class="text-form">
                        <p>Please fill out the form below to let us know you</p>
                    </div>
                    <div class="fill-form">
                        <input type="text" class="fill-form-name" name="" id="" placeholder="Name">
                        <input type="email" placeholder="Email">
                    </div>
                </div>

                <div class="chat-conversation">
                    <div class="text-conversation">
                        <p>or skiping to conversation</p>
                    </div>
                    <div class="btn-conversation">
                        <button>
                            <p>Start Conversation</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 -12 158 158" fill="none">
                                <g clip-path="url(#clip0)">
                                <path d="M6.72129 53.8326C5.22886 54.369 3.79008 55.0461 2.42414 55.8549C1.99492 56.0692 1.62306 56.3841 1.33985 56.7732C1.05664 57.1622 0.870351 57.614 0.796627 58.0907C0.728141 58.9623 1.18429 59.8347 2.14826 60.6823C2.95005 61.3417 3.81412 61.9203 4.72808 62.4099C5.42909 62.8132 6.14303 63.1944 6.85696 63.575C7.87906 64.1201 8.93607 64.6808 9.92071 65.3035C23.2735 73.7162 35.4245 81.1753 48.7508 87.2021C48.7223 87.6822 48.6907 88.1609 48.6584 88.6377C48.5679 89.9855 48.4749 91.3782 48.4729 92.7533C48.4699 94.8297 48.4618 96.9073 48.4484 98.9863C48.4141 105.578 48.3786 112.395 48.5989 119.098C48.6784 121.515 49.5403 123.243 51.0256 123.964C52.5872 124.719 54.5946 124.279 56.6783 122.719C57.4297 122.156 58.1998 121.524 59.032 120.785C62.6824 117.545 66.3277 114.298 70.0078 111.02L73.343 108.049C73.3682 108.068 73.3927 108.087 73.4153 108.107L76.4991 110.778C80.01 113.816 83.6397 116.957 87.1829 120.08C88.1921 120.967 89.2071 121.85 90.2279 122.727C93.3395 125.417 96.5596 128.198 99.4515 131.179C100.984 132.756 102.474 133.498 104.264 133.498C105.036 133.487 105.803 133.372 106.546 133.158C109.158 132.442 110.843 130.835 112.011 127.954C116.411 117.096 120.915 106.068 125.269 95.4041C128.844 86.644 132.416 77.8832 135.985 69.1212C143.674 50.3116 150.308 31.082 155.854 11.5231C156.526 9.25442 156.998 6.93056 157.266 4.57852C157.355 4.03355 157.322 3.47531 157.169 2.945C157.015 2.41468 156.745 1.92589 156.379 1.51476C155.937 1.11363 155.412 0.817045 154.841 0.646857C154.272 0.476668 153.671 0.437215 153.083 0.531243C152.306 0.62523 151.539 0.799482 150.796 1.05151L150.696 1.08216C149.028 1.58303 147.355 2.06949 145.682 2.5567C141.796 3.6879 137.778 4.85757 133.878 6.19107C105.715 15.8287 77.1517 26.3209 48.9821 37.3766C40.8575 40.564 32.5849 43.7787 24.5844 46.8861C18.6266 49.1966 12.6722 51.5121 6.72129 53.8326ZM60.3339 83.5438C61.8845 82.2395 63.3543 81.0069 64.863 79.8484C70.7773 75.3015 76.6975 70.7617 82.6228 66.2304C94.2653 57.3147 106.305 48.0953 118.081 38.9404C121.682 36.1433 125.099 32.9988 128.404 29.9637C129.539 28.9229 130.673 27.8776 131.816 26.8465C132.728 26.0243 134.254 24.6486 133.408 21.9607C133.38 21.8729 133.335 21.7918 133.275 21.7225C133.215 21.6532 133.141 21.5973 133.059 21.5582C132.976 21.5193 132.886 21.4978 132.794 21.4951C132.703 21.4924 132.612 21.5085 132.527 21.5424C132.174 21.6862 131.833 21.8131 131.504 21.9328C130.819 22.1684 130.152 22.4534 129.508 22.7856C107.655 34.7331 88.645 50.3999 70.2617 65.552C66.1042 68.9781 62.1856 72.5122 58.0409 76.2499C56.2809 77.8377 54.5032 79.432 52.7074 81.0335L11.7046 58.6697C11.9409 58.5229 12.189 58.3963 12.4463 58.2911C19.0407 55.791 25.6326 53.2819 32.2218 50.7636C48.3566 44.61 65.0432 38.2463 81.5231 32.1929C96.1997 26.8017 111.219 21.5788 125.743 16.5278C130.572 14.8487 135.401 13.1663 140.228 11.4807C142.099 10.8263 143.986 10.3144 145.986 9.77318C146.515 9.63008 147.047 9.48508 147.581 9.33807C139.534 35.016 129.269 60.2022 119.336 84.5728C114.116 97.3783 108.723 110.61 103.68 123.835C89.9733 112.724 76.6781 100.978 63.8163 89.6134C62.0792 88.077 60.3384 86.5399 58.5939 85.0022C59.187 84.5045 59.7653 84.0193 60.3319 83.5438H60.3339ZM67.952 103.131L56.1931 113.163L55.2608 91.3281L67.952 103.131Z" fill="#000000"></path>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="157" height="134" fill="white" transform="translate(0.777344)"></rect>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="chat-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="120px" height="120px" viewBox="0 0 382.000000 271.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,271.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M2374 1746 c-3 -7 -6 -25 -8 -39 -1 -14 -27 -53 -59 -88 -52 -57 -57 -66 -57 -109 0 -31 9 -63 24 -93 14 -25 22 -47 19 -50 -6 -7 -59 9 -81 25 -39 27 -142 154 -153 188 -6 19 -20 59 -31 88 -19 48 -23 52 -54 52 -19 0 -34 -4 -34 -10 0 -5 -11 -10 -24 -10 -31 0 -39 -11 -69 -97 -42 -122 -168 -263 -236 -263 -26 0 -26 -1 4 56 45 85 30 150 -54 223 -20 18 -33 40 -38 70 -11 56 -29 63 -48 17 -11 -26 -21 -36 -38 -35 -12 0 -46 -2 -75 -7 -49 -6 -56 -5 -97 25 -53 38 -69 33 -61 -18 4 -20 10 -83 15 -141 8 -100 6 -117 -21 -232 -12 -52 -50 -93 -138 -150 -146 -95 -187 -153 -201 -283 -5 -50 -3 -93 9 -153 23 -119 23 -119 -180 -127 -169 -6 -242 -23 -294 -68 -35 -31 -41 -76 -14 -109 30 -39 137 -71 210 -63 115 12 168 35 151 64 -6 10 -38 14 -111 16 -111 3 -132 11 -99 40 19 18 42 20 242 23 122 2 323 -1 447 -8 265 -15 510 -18 510 -7 0 4 -5 7 -11 7 -6 0 -31 20 -56 44 l-45 44 12 166 c6 91 10 213 9 272 l-1 106 54 56 c95 100 210 251 234 307 8 19 14 47 14 62 1 22 4 18 18 -22 9 -28 31 -68 47 -90 72 -96 152 -194 196 -240 l48 -50 7 -230 c11 -343 14 -315 -32 -362 -22 -23 -51 -44 -64 -47 -14 -3 117 -2 290 2 173 4 444 7 602 7 266 0 288 -2 307 -19 11 -10 18 -23 15 -27 -3 -5 -49 -9 -103 -9 -71 0 -102 -4 -117 -15 -19 -15 -19 -15 5 -35 13 -11 33 -20 45 -21 11 0 48 -4 81 -8 170 -22 305 78 218 161 -55 53 -112 68 -277 74 -83 3 -161 7 -174 10 -39 8 -47 43 -27 120 35 140 -5 293 -97 366 -24 19 -75 55 -115 81 -84 55 -109 87 -124 158 -5 30 -14 65 -18 79 -7 24 1 178 15 273 6 43 5 47 -13 47 -12 0 -26 -7 -34 -16 -7 -8 -26 -22 -43 -31 -25 -13 -38 -14 -83 -4 -29 7 -57 10 -63 6 -5 -3 -19 10 -31 29 -22 38 -36 45 -45 22z m25 -35 c8 -14 7 -20 -4 -25 -11 -4 -15 2 -15 19 0 30 6 32 19 6z m267 -23 c-13 -43 -25 -243 -16 -273 5 -16 14 -57 21 -89 16 -75 42 -105 148 -174 47 -30 102 -72 123 -93 43 -46 78 -141 78 -213 -1 -63 -22 -155 -44 -188 -13 -20 -15 -38 -10 -77 l7 -51 -45 0 c-24 0 -49 5 -56 12 -6 6 -53 14 -104 18 -143 9 -223 58 -248 151 -8 29 -8 50 0 74 11 33 77 102 119 125 31 16 20 23 -15 10 -73 -28 -140 -127 -130 -192 8 -48 45 -108 81 -132 l27 -18 -22 -15 c-19 -14 -23 -13 -42 4 -83 74 -105 138 -78 222 21 65 18 73 -49 147 -62 68 -121 145 -121 156 0 6 8 7 18 3 9 -4 37 -11 62 -15 59 -10 147 -44 171 -66 11 -9 22 -15 25 -12 3 3 -7 18 -23 32 -26 25 -96 51 -203 77 -50 12 -86 45 -209 193 -152 181 -157 191 -163 320 -2 44 1 70 8 73 12 4 39 -54 49 -105 8 -38 103 -163 161 -210 56 -46 90 -49 188 -17 53 17 96 26 120 23 36 -4 47 4 24 19 -9 5 -3 10 17 14 28 6 27 7 -10 7 -22 1 -65 -8 -95 -19 -30 -11 -64 -23 -75 -25 -27 -7 -59 29 -79 89 -14 42 -14 51 -2 76 21 39 96 110 126 118 31 9 105 8 147 -2 25 -6 39 -2 69 19 47 32 58 33 50 4z m-341 -688 c21 -30 53 -69 73 -86 l34 -31 -17 -69 c-31 -126 -77 -279 -87 -291 -10 -13 -98 -19 -98 -7 0 3 14 19 31 35 l31 29 -6 128 c-3 70 -8 181 -12 247 -4 74 -3 116 3 110 5 -5 27 -35 48 -65z m122 -182 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m-988 -38 c1 -13 0 -13 -9 0 -5 8 -9 24 -9 35 l0 20 9 -20 c5 -11 9 -27 9 -35z m1004 -161 c31 -41 33 -49 12 -49 -9 0 -25 -16 -36 -35 -18 -30 -24 -34 -52 -28 -18 3 -34 7 -36 9 -1 1 4 24 12 51 8 26 23 75 33 109 l19 61 10 -41 c6 -23 23 -58 38 -77z m-959 7 c9 -38 23 -84 31 -102 l13 -32 -38 -4 c-32 -3 -42 2 -73 33 l-35 37 28 42 c16 24 31 58 35 78 8 45 19 32 39 -52z m1693 -42 c135 -2 166 -5 213 -24 71 -28 90 -46 90 -85 0 -39 -12 -51 -76 -70 -58 -18 -134 -19 -204 -4 -82 17 -58 30 56 28 86 -1 109 2 124 16 23 21 33 61 21 83 -9 14 -10 13 -11 -10 0 -31 -15 -45 -27 -25 -17 29 -53 35 -218 36 -93 1 -170 3 -171 4 -1 1 -4 27 -8 57 l-7 55 30 -29 31 -30 157 -2z m-544 -29 c20 -8 53 -15 74 -15 28 0 34 -3 23 -10 -8 -5 -55 -10 -105 -9 l-90 0 30 24 c17 14 31 25 31 25 1 0 18 -7 37 -15z m-129 -1 c9 -3 16 -12 16 -19 0 -16 -22 -25 -61 -25 -35 0 -37 13 -7 34 25 18 30 19 52 10z m309 -21 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z"/>
                        </g>
                    </svg>
                </div>
            </div>

            <!-- Chat message-->
            <div class="chat-header-body hide">
                <div class="chat-header-body-icon" style="display:inline-block">
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon" version="1.1"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#fff"/></svg></button>
                </div>
                <div class="chat-header-body-title">
                    <p>Let's chat?</p> 
                </div>
                <div class="chat-header-body-text">
                    <p>Typically reply in a few minutes</p> 
                </div>
            </div>
            <div id="chatbody" class="chat-body hide" style="display:block">
                <div class="chat-start">Time</div>
                <div class="chat-bubble you">👋How can we help you?</div>
                <!-- <div class="chat-session-end">
                    <h5>This chat session has ended</h5>
                    <p>Thank you for chatting with us, If you can take a minute and rate this chat:</p>
                    <div class="rate-me">
                        <div class="rate-bubble great">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></span>
                            Great
                        </div>
                        <div class="rate-bubble bad">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-down"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg></span>
                            Bad
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="chat-input hide">
                <input class="input-msg" type="text" placeholder="Type a message...">
                <div class="input-action-icon">
                    <a id="btnSend"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>
                </div>
            </div>
        </div>
    </div>

    <!--Chat icon-->
    <div class="circle-start">
        <svg class="envelop-start" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"/></svg>
    </div>
    `;

    chatContainer.innerHTML = chatContainerTemplate;
    document.body.appendChild(chatContainer);

    const start = document.querySelector(".chat");
    start.style.padding = "0";
    start.style.margin = "0";
    start.style.boxSizing == "border-box";
    start.style.textDecoration == "none";
    start.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

//Change the max-height and min-height when zoom in/ zoom out
    window.addEventListener('resize', function(event){
        var chatScreen = document.querySelector('.show-chat');

        var windowHeight = window.innerHeight;
        var zoomLevel = window.devicePixelRatio / 1.5;
        var result = windowHeight * zoomLevel;
            
        chatScreen.style.maxHeight = result - 100 + 'px';
        chatScreen.style.minHeight = result - 300 + 'px';
        });

    const chatboticon = document.querySelector(".circle-start");
    const chatScreenElement = document.querySelector(".chat-screen");

    //Khi click vào chatboticon, sẽ show những class có phần đằng sau là show-chat (set trong file css/style.css)
    chatboticon.addEventListener("click", function() {
        if (chatScreenElement.classList.contains("show-chat")) {
            chatScreenElement.classList.remove("show-chat");
        } else {
            chatScreenElement.classList.add("show-chat");
        }
    });

    //Hide chat-home
    const conversationbutton = document.querySelector(".chat-conversation button");

    conversationbutton.addEventListener("click", function() {
        const chathome = document.querySelector(".chat-home");
        const chatbody = document.querySelector(".chat-body");
        const chatheaderbody = document.querySelector(".chat-header-body");
        const chatinput = document.querySelector(".chat-input");

        chathome.classList.add("hide");
        chatbody.classList.remove("hide");
        chatheaderbody.classList.remove("hide");
        chatinput.classList.remove("hide");
    })
      //Hide chat-message
    const headerbodybutton = document.querySelector(".chat-header-body-icon button");

    headerbodybutton.addEventListener("click", function() {
        const chathome = document.querySelector(".chat-home");
        const chatbody = document.querySelector(".chat-body");
        const chatheaderbody = document.querySelector(".chat-header-body");
        const chatinput = document.querySelector(".chat-input");

        chathome.classList.remove("hide");
        chatbody.classList.add("hide");
        chatheaderbody.classList.add("hide");
        chatinput.classList.add("hide");
        })

    //Time
    var chatBody = document.querySelector(".chat-body");
    var timeDiv = document.querySelector(".chat-start");
    // Get the current time
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var date = now.toLocaleDateString();

    // Check if it is AM or PM
    var amPm = hour >= 12 ? "PM" : "AM";

    // Add the datetime data to the time div
    timeDiv.textContent = date + ", " + hour + ":" + minute + ":" + second + " " + amPm;

/*======================== [WEB SOCKET SERVER] ========================*/
var webSiteAPI = 'ws://127.0.0.1:3500';
var connection = new WebSocket(webSiteAPI);
const userid = crypto.randomUUID().toString();
const chatInput = document.querySelector(".input-msg");
const btnSend = document.querySelector("#btnSend");

connection.onopen = function() {
    console.log('Connected!');
}

btnSend.addEventListener('click', (event) => {
    try 
    {
        var message = document.querySelector(".input-msg").value;
        document.querySelector(".input-msg").value = " ";
        if(message != null)
        {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "chat-bubble me");

            const newContent = document.createTextNode(message);
            newDiv.appendChild(newContent);

            const bodyDiv = document.querySelector(".chat-body");
            bodyDiv.appendChild(newDiv);
        }
        
        var currentDomain = window.location.host;


        //#region user info
        const user = {
        userid: userid,
        currentDomain: currentDomain,
        msgContent: message
        }
        //#endregion

        console.log(JSON.stringify(user));
        connection.send(JSON.stringify(user));
        
    } 

    catch (error) {
        var msgContent = document.querySelector(".chat-bubble.me").innerHTML = error.message;
    }
});


chatInput.addEventListener("keydown", function(event) {
if (event.keyCode === 13) {
    var message = document.querySelector(".input-msg").value;
    document.querySelector(".input-msg").value = " ";
//   var msgContent = document.querySelector(".chat-bubble.me").innerHTML = message;
    if(message != null)
    {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "chat-bubble me");

        const newContent = document.createTextNode(message);
        newDiv.appendChild(newContent);

        const bodyDiv = document.querySelector(".chat-body");
        bodyDiv.appendChild(newDiv);
    }
    
    var currentDomain = window.location.host;


    
    const user = {
    userid: userid,
    currentDomain: currentDomain,
    msgContent: message
    }
    

    console.log(JSON.stringify(user));
    connection.send(JSON.stringify(user));
}
});

// Log errors
connection.onerror = function (error) {
    console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
    // var msgServer = document.querySelector('.chat-bubble you').innerHTML = e.data;
    if(e.data != null)
    {
        const adDiv = document.createElement("div");
        adDiv.setAttribute("class", "chat-bubble you");

        const adContent = document.createTextNode(e.data);
        adDiv.appendChild(adContent);

        const bodyDiv = document.querySelector(".chat-body");
        bodyDiv.appendChild(adDiv);
    }

    console.log('Server: ' + e.data);
};

