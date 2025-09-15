# History and Origins Website Assignment

## What I Made
I created a historical website focused on the **Halifax Gibbet**, its origins, and key events. The site includes:  

- **Hero section** with a full-width background image.  
- **Text-and-image sections** that alternate layout for readability.  
- **Interactive guillotine animation** to illustrate historical mechanisms.  
- **Timeline of historical events** using a visual and interactive timeline layout.  
- **Dark/light mode toggle** and **scroll-to-top button** for user convenience.  
- **Responsive design** that adjusts for desktops, tablets, and mobile devices.  
- **Sources section** with external references for further reading.  

---

## Why I Made It
The project aimed to demonstrate my front-end web development skills while creating an educational, visually appealing site. I focused on:  

- Using **CSS variables** for easy theme switching.  
- Implementing **animations** for enhanced user engagement.  
- Ensuring **accessibility and responsiveness** for a variety of devices.  
- Practicing **DOM manipulation** and **event handling** in JavaScript.  

---

## How I Made It

### HTML Structure
- Organized content into semantic sections (`<header>`, `<main>`, `<section>`, `<footer>`).  
- Alternating text-image sections improve readability and layout variety.  
- Timeline events and sources are separated into structured containers.  

### CSS Styling
- Used **CSS variables** for light and dark themes.  
- Created **flexbox and grid layouts** for responsive text-image and timeline sections.  
- Added **keyframe animations** to slide in articles as the user scrolls.  
- Styled interactive buttons and guillotine animations for visual impact.  
- Initially used `overflow-x: hidden;` on the `body` to prevent horizontal scroll, but this caused the **vertical scroll bar to appear at the footer** during slide-in animations. I resolved it by either removing `overflow-x: hidden;` or wrapping animated content in a container with `overflow: hidden;` to contain the sliding elements.  

### JavaScript Functionality
1. **Theme Toggle:**  
   - Uses a button to switch between dark/light modes.  
   - Current theme is saved in `localStorage` to persist across page reloads.  
   - Theme icon changes dynamically between sun (☀) for dark mode and moon (🌑) for light mode.  

2. **Animations on Scroll:**  
   - Uses `IntersectionObserver` to detect when `.origins_articale` and `.origins_articale_right` come into view.  
   - Triggers slide-in animations for a smooth visual effect.  

3. **Scroll-to-Top Button:**  
   - Appears after scrolling down 20px.  
   - Clicking scrolls the page back to the top.  

4. **Timeline Interaction:**  
   - Timeline items are clickable and display an alert showing the clicked item’s heading (used for demonstration/testing).  

### Responsive Design
- Media queries adjust layout, font sizes, and flexbox direction for smaller screens.  
- Ensured images, timelines, and text scale properly without breaking the layout.  

---

## Challenges and Learning
- Integrating **theme toggle** across multiple elements required careful planning with CSS variables.  
- Ensuring animations worked seamlessly while keeping the site responsive took multiple iterations.  
- The slide-in animations for `.origins_articale` and `.origins_articale_right` initially caused the **scroll bar to appear at the footer**. Researching the issue led to the discovery that `overflow-x: hidden;` on the body was causing this behavior. It was resolved by restricting overflow on the animated container instead.  
- I gained experience combining **HTML, CSS, and JavaScript** to create an interactive, educational site.  

---

## Future Improvements
- Add smoother JavaScript transitions for theme switching.  
- Include more interactive elements in the timeline and guillotine animation.  
- Improve accessibility with keyboard navigation and ARIA attributes.  

---

## Use of AI and External Sources
I did **not use AI to generate any content, code, or design** for my website. All HTML, CSS, and JavaScript were **written by me**.  

However, I did use **external sources from the internet** for:  
- **Historical information** about the Halifax Gibbet.  
- **Images** and references to illustrate the content.  
- **Tutorials and YouTube videos** to understand web development concepts, such as animations and responsive layouts.  

The only use of AI was as a **research aid**, helping me locate sources or tutorials online. For example, I used AI to find guidance when I could not figure out why the slide-in animations caused the scroll bar to appear.  

This demonstrates that while I personally coded and structured the site, some **information and inspiration were taken from the internet**, and AI was used purely for **guidance**, not content creation.  

---

## References and Sources
- [Wikipedia - Halifax Gibbet](https://en.wikipedia.org/wiki/Halifax_Gibbet)  
- [Britannica - Guillotine](https://www.britannica.com/topic/guillotine)  
- [Calderdale - Halifax Gibbet](https://www.calderdale.gov.uk/wtw/search/controlservlet?DocId=100475&PageId=Detail)  
- [Guillotine.dk](https://www.guillotine.dk/index.html)  
- [Realyorkshireblog - Halifax Gibbet](https://www.realyorkshireblog.com/post/the-gibbet-halifax-s-violent-execution-machine)  
- [Wikipedia - Defenestration](https://en.wikipedia.org/wiki/Defenestration)  
- [Wikipedia - Old Town Square execution](https://en.wikipedia.org/wiki/Old_Town_Square_execution)  
- [Wikipedia - Jan Hus](https://en.wikipedia.org/wiki/Jan_Hus) (additional reading)  
