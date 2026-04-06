const floatingContainer = document.getElementById("floating-container");

const icons = [
  { icon: "💸", left: "6%", delay: "0s", duration: "12s", size: "38px" },
  { icon: "🚀", left: "18%", delay: "1s", duration: "14s", size: "46px" },
  { icon: "📈", left: "30%", delay: "2s", duration: "11s", size: "38px" },
  { icon: "💡", left: "42%", delay: "0.5s", duration: "13s", size: "38px" },
  { icon: "💼", left: "58%", delay: "1.5s", duration: "15s", size: "46px" },
  { icon: "🔥", left: "70%", delay: "2.5s", duration: "12s", size: "38px" },
  { icon: "✨", left: "82%", delay: "0.8s", duration: "10s", size: "46px" },
  { icon: "🏷️", left: "92%", delay: "1.8s", duration: "16s", size: "38px" }
];

icons.forEach(item => {
  const el = document.createElement("div");
  el.className = "floating-icon";
  el.innerText = item.icon;
  el.style.left = item.left;
  el.style.animationDuration = item.duration;
  el.style.animationDelay = item.delay;
  el.style.fontSize = item.size;
  floatingContainer.appendChild(el);
});