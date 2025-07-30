const dataset = [
  {
    question: "Who are you?",
    answer:
      "<strong>I'm Aman Verma</strong>, a 23-year-old software developer from India.<br><br>I’ve always been curious about tech and love building things with code. I recently completed a remote internship with <strong>ESU PARTNERS</strong> (Seoul, South Korea), where I worked on AI-driven tech solutions and learned to bridge business needs with real-world software.<br><br>Aside from coding, I enjoy driving and exploring new ideas.",
    image: "aman.png"
  },
  {
  question: "What are your projects? What are you working on right now?",
  answer:
    "I recently completed my personal portfolio project, which features an <strong>AI-powered chatbot</strong> designed for interactive user engagement.<br><br>Prior to this, I developed:<br><br>🔹 <strong>Finger Canvas</strong> – A virtual sketch pad that enables digital drawing through finger gestures.<br>🔹 <strong>Wallet Meter</strong> – An intuitive expense tracker built to help users manage their finances effectively.<br><br>My current focus is on building real-world applications that integrate <strong>artificial intelligence</strong> in practical and impactful ways."
},

  {
    question: "What are your skills? Give me a list of your hard and soft skills.",
    answer:
      "Here’s a complete breakdown of my skills categorized for clarity:<br><br><strong>Programming Languages</strong><br>Python<br>Java<br><br><strong>Core Computer Science</strong><br>OOPs (Object-Oriented Programming)<br>DSA (Data Structures & Algorithms)<br><br><strong>Web Development</strong><br>HTML<br>CSS<br>JavaScript (Vanilla)<br><br><strong>Databases</strong><br>SQL<br><br><strong>DevOps & Cloud</strong><br>Docker<br>AWS (EC2, S3, VPC)<br>Cloud Computing & Virtualization Technology<br><br><strong>Version Control</strong><br>Git<br>GitHub<br><br><strong>AI & Productivity Tools</strong><br>ChatGPT<br>Gemini<br>Perplexity<br><br><strong>Soft Skills</strong><br>Communication<br>Problem-Solving<br>Adaptability<br>Teamwork<br>Creativity<br>Focus"
  },
  {
    question: "How can I reach you?",
    answer:
      "You can contact me via the following platforms:<br><br>📧 Email: <a href='mailto:amandeveloper01@gmail.com'>amandeveloper01@gmail.com</a><br>📱 Phone: +91 799236924<br>🔗 LinkedIn: <a href='https://your-linkedin-link-here' target='_blank'>Visit LinkedIn</a><br>📸 Instagram: <a href='https://your-instagram-link-here' target='_blank'>Visit Instagram</a>"
  },
  {
    question: "Fun",
    answer:
      "I like to add a bit of fun to coding! Whether it’s gamifying a project, experimenting with creative UI ideas, or diving into new tech just for the thrill of it — I always enjoy mixing imagination with development. ✨"
  },
  {
    question: "hello",
    answer:
      "Hey there! 👋 I’m Aman Verma, a passionate software developer who loves turning ideas into real-world tech solutions. Feel free to ask me about my projects, skills, or how to connect. Let’s chat!"
  },
 
  {
    question: "how are you",
    answer:
      "Thanks for asking! 😊 I'm doing great — busy building, learning, and coding cool stuff. Every day is a chance to grow as a developer. How about you? Hope you're doing awesome too!"
  },
  {
    question: "where are you from",
    answer:
      "I'm from India, a small village called <strong>Chitwaniya</strong> in <strong>Raebareli</strong> (PIN: 229308). It's a peaceful place that keeps me grounded and inspired. No matter where tech takes me, my roots keep me real. 🌾"
  }
];

function handleInput() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  if (input) {
    displayResponse(input);
    document.getElementById("userInput").value = "";
  }
}

function handleQuickInput(questionText) {
  if (questionText) {
    displayResponse(questionText.toLowerCase());
  }
}

function displayResponse(input) {
  const output = document.getElementById("chatOutput");
  output.innerHTML = "";
  output.style.overflowY = "auto";
  output.style.maxHeight = "400px";

  const typingBubble = document.createElement("div");
  typingBubble.className = "chat-bubble typing";
  typingBubble.textContent = "Typing...";
  output.appendChild(typingBubble);
  output.scrollTop = output.scrollHeight;

  const response = dataset.find(item => input.includes(item.question.toLowerCase().split('?')[0]));

  setTimeout(() => {
    output.innerHTML = "";
    const chatBubble = document.createElement("div");
    chatBubble.className = "chat-bubble";

    if (response) {
      const text = response.answer;
      let index = 0;
      let isTag = false;
      let htmlBuffer = "";

      const typeText = () => {
        if (index < text.length) {
          const char = text.charAt(index);
          htmlBuffer += char;

          if (char === '<') isTag = true;
          if (char === '>') isTag = false;

          if (!isTag) chatBubble.innerHTML = htmlBuffer;

          index++;
          setTimeout(typeText, 10);
          output.scrollTop = output.scrollHeight;
        } else {
          chatBubble.innerHTML = htmlBuffer;
          if (response.image) {
            const img = document.createElement('img');
            img.src = response.image;
            img.alt = "Aman Verma";
            img.className = "chat-image";
            chatBubble.appendChild(document.createElement('br'));
            chatBubble.appendChild(img);
          }
          output.scrollTop = output.scrollHeight;
        }
      };

      typeText();
    } else {
      chatBubble.textContent = "Sorry, I couldn't find an answer for that. Try asking about me, my skills, projects, or how to reach me.";
    }

    output.appendChild(chatBubble);
    output.scrollTop = output.scrollHeight;
  }, 1500);
}

document.addEventListener("DOMContentLoaded", function () {
  const buttonMappings = {
    meBtn: "Who are you?",
    projectsBtn: "What are your projects? What are you working on right now?",
    skillsBtn: "What are your skills? Give me a list of your hard and soft skills.",
    funBtn: "Fun",
    contactBtn: "How can I reach you?"
  };

  for (const [id, question] of Object.entries(buttonMappings)) {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", () => handleQuickInput(question));
    }
  }
});
