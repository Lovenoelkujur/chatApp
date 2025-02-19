// User List Data
const usersData = [
    {
      id : "chat1",
        avatar:
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-942065100-copy.jpg?resize=1200:*",
        name: "John Mayers",
        time: "3 min ago",
        status: "Accountant",
      },
      {
        id : "chat2",
        avatar:
          "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_1280.jpg",
        name: "Tony Stark",
        time: "10 min ago",
        status: "Genius, Billionaire, Playboy, Philanthropist",
      },
      {
        id : "chat3",
        avatar:
          "https://c4.wallpaperflare.com/wallpaper/739/10/526/scarlett-johansson-face-pink-lipstick-actress-wallpaper-preview.jpg",
        name: "S. Johansson",
        time: "3 hours ago",
        status: "Black Widow",
      },
      {
        id : "chat4",
        avatar:
          "https://www.gannett-cdn.com/presto/2023/02/15/USAT/d22ad1a7-00ec-425f-b1c9-a643fcfcda9f-AFP_AFP_336E7FA.jpg",
        name: "Jeremy Renner",
        time: "4 hours ago",
        status: "Hawkeye",
      },
      {
        id : "chat5",
        avatar: "https://flxt.tmsimg.com/assets/308495_v9_bb.jpg",
        name: "Anthony Mackie",
        time: "8 hours ago",
        status: "Falcon",
      },
      {
        id : "chat6",
        avatar:
          "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRpW3LbFgFmL3wF7AxVmNPkfKKVTg3hdeDwJAkQ6ffgI1aqNQH-ofOktw9CRPIIPA8IRuPHc9YeW1BGdTI",
        name: "Chris Evans",
        time: "22 hours ago",
        status: "Captain America",
      },
      {
        id : "chat7",
        avatar:
          "https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg?crop=1xw:0.75xh;center,top&resize=1200:*",
        name: "Chris Hemswoth",
        time: "1 day ago",
        status: "Thor the god of thunder",
      },
      {
        id : "chat8",
        avatar: "https://www.emmys.com/sites/default/files/Mark-Ruffalo.jpg",
        name: "Mark Ruffalo",
        time: "Dec 10",
        status: "The Incrdible Hulk",
      },
      {
        id : "chat9",
        avatar:
          "https://www.themoviedb.org/t/p/w500/mclHxMm8aPlCPKptP67257F5GPo.jpg",
        name: "Tom Hiddleston",
        time: "Dec 8",
        status: "Loki",
      },
      {
        id : "chat10",
        avatar: "https://flxt.tmsimg.com/assets/71830_v9_bb.jpg",
        name: "Don Cheadle",
        time: "Dec 6",
        status: "Rhodey",
      },
      {
        id : "chat11",
        avatar:
          "https://m.media-amazon.com/images/M/MV5BMTk3NDE3Njc5M15BMl5BanBnXkFtZTYwOTY5Nzc1._V1_.jpg",
        name: "Stan Lee",
        time: "Dec 4",
        status: "The Big Daddy",
      },
      {
        id : "chat12",
        avatar:
          "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_FMjpg_UX1000_.jpg",
        name: "S.L. Jackson",
        time: "Dec 2",
        status: "Shield",
      },
];

// Chat Data
const jsonData = {
    chat1: [
      {
        from: {
          type: "user1",
        },
        msg: {
          message: "Hi, how can I help you?",
        },
      },
      {
        from: {
          type: "user2",
        },
        msg: {
          message:
            "Hi guys Ive got the O2 package and have really slow internet. A speed check online said i can get 3mbps but it seems more like 0.5 these days, just freezing and taking ages to open pages and open audio files for example. I have decided to switch to the UPC package which offers 10mbps but do you think i will get it?",
        },
      },
      {
        from: {
          type: "user1",
        },
        msg: {
          message:
            "Sure! I will definitely help you with you query. Could you please confirm your email address?",
        },
      },
      {
        from: {
          type: "user2",
        },
        msg: {
          message: "john.mayers@gmail.com",
        },
      },   
    ],
    chat2: [
      {
        from: {
          type: "user1",
        },
        msg: {
          message: "Hi, how can I help you?",
        },
      },
      {
        from: {
          type: "user2",
        },
        msg: {
          message:
            "Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me?",
        },
      },
      {
        from: {
          type: "user1",
        },
        msg: {
          message:
            "Sure! I will definitely help you with you query. Could you please confirm your email address?",
        },
      },
      {
        from: {
          type: "user2",
        },
        msg: {
          message: "tony.stark@gmail.com",
        },
      },    
    ],
    
};

// Select Element
const userList = document.getElementById("users");
const userAvatarDisplay = document.getElementById("user-avatar");
const userNameDisplay = document.getElementById("user-name");
const userStatusDisplay = document.getElementById("user-status");
const chatMessage = document.getElementById("chat-message");
const msgInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-button");
const container = document.querySelector(".container");
const backButton = document.querySelector(".back-button");

// Load User Hnadler
const loadUser = () => {
    usersData.forEach((user) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${user.avatar}" alt="${user.name}" />
            <span class="span-name">${user.name}</span>
            <span class="span-time">${user.time}</span>
        `
        // Add Click Event to Open Chat
        li.addEventListener("click", () => loadChat(user.id, user.name, user.avatar, user.status));

        // Add Line
        const hr = document.createElement("hr");
        
        userList.appendChild(li);
        userList.appendChild(hr);
    });
};

// Load Chats
const loadChat = (chatId, userName, userAvatar, userStatus) => {
    userAvatarDisplay.src = userAvatar
    userNameDisplay.textContent = userName;
    userStatusDisplay.textContent = userStatus;
    chatMessage.innerHTML = "";     // Cleare previous chat

    if(jsonData[chatId]){
        jsonData[chatId].forEach((msg) => {
            // Display msgs of user
            addMessage(msg.from.type, msg.msg.message);
        })
    }

    // Only hide user list on small screens
    if (window.innerWidth <= 768) {
        container.classList.add("show-chat");   // Show chat and hide user list (For tablet view)
        backButton.style.display = "block";     // Show Back Button
    }
}

// Add Message
const addMessage = (type, text) => {
    const div = document.createElement("div");
    div.classList.add("message", type);
    div.textContent = text;
    chatMessage.appendChild(div);
    chatMessage.scrollTop = chatMessage.scrollHeight        // Auto-Scroll
}

// Handle Send Message
const handleSendMessage = () => {
    const msgText = msgInput.value.trim().toLowerCase(); // Convert to lowercase for case-insensitive check

    if (msgText !== "") {
        addMessage("user2", msgText);
        msgInput.value = ""; // Clear input field after sending
        
        // Check for greeting messages first
        const greetings = ["hi", "hey", "hello"];
        if (greetings.includes(msgText)) {
            setTimeout(() => addMessage("user1", "Hello! How are you doing?"), 1000);
        } else {
            // Default response for non-greeting messages
            setTimeout(() => addMessage("user1", "I'll get back to you soon!"), 1000);
        }
    }
};

// Show User List when Back Button is Clicked
const showUsers = () => {
    if (window.innerWidth <= 768) {  // Only apply for small screens
        container.classList.remove("show-chat");
        backButton.style.display = "none";      // Hide Back Button
    }
};


// Send New Message
sendBtn.addEventListener("click", handleSendMessage);

// call Load User Data
loadUser();

// Menu Functionality

const searchInput = document.getElementById("search-user");
const bgColorPicker = document.getElementById("bg-color-picker");
const headerColorPicker = document.getElementById("header-color-picker");

// 🎯 SEARCH USER FUNCTIONALITY
searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    const userItems = document.querySelectorAll(".user-list li");

    userItems.forEach((li) => {
        const userName = li.querySelector(".span-name").textContent.toLowerCase();
        if (userName.includes(searchText)) {
            li.style.display = "flex"; // Show matching users
        } else {
            li.style.display = "none"; // Hide non-matching users
        }
    });
});

// 🎨 CHANGE BACKGROUND COLOR
bgColorPicker.addEventListener("input", function () {
    document.body.style.backgroundColor = bgColorPicker.value;
});

// 🎨 CHANGE HEADER & BUTTON COLOR
headerColorPicker.addEventListener("input", function () {
    document.querySelectorAll(".head, .send-button, .dropdown-btn").forEach((element) => {
        element.style.backgroundColor = headerColorPicker.value;
    });
});
