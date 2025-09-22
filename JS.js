  // --- Wait for DOM ---
  document.addEventListener("DOMContentLoaded", () => {

    // --- Rotating Hero ---
    const slogans = [
      "Eat Healthy, Live Longer",
      "Your Body is Your Temple",
      "Wellness Starts with You",
      "Small Steps, Big Changes"
    ];

    let sloganIndex = 0;
    const sloganEl = document.getElementById("slogan");
    if (sloganEl) {
      setInterval(() => {
        sloganIndex = (sloganIndex + 1) % slogans.length;
        sloganEl.textContent = slogans[sloganIndex];
      }, 3000);
    }

    // --- Responsive Navbar ---
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    if (menuBtn && navLinks) {
      menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));
    }

    // --- Health Tip of the Day ---
    const tips = [
      "Drink 8 glasses of water today!",
      "Take a 10-minute walk after meals.",
      "Eat at least 2 servings of fruit.",
      "Practice deep breathing for 5 minutes.",
      "Avoid sugary drinks today.",
      "Stretch for 5 minutes every hour.",
      "Swap fried snacks with fresh fruit.",
      "Try to sleep at least 7 hours tonight.",
      "Add leafy greens to your lunch.",
      "Limit screen time before bed.",
      "Use stairs instead of the elevator.",
      "Take 2 minutes to practice gratitude.",
      "Replace soda with sparkling water.",
      "Include protein in every meal.",
      "Do 15 squats during a short break.",
      "Stand up and walk for 2 minutes every hour.",
      "Eat a handful of nuts as a snack.",
      "Do 10 push-ups before lunch.",
      "Spend 10 minutes in natural sunlight.",
      "Replace white rice with brown rice or quinoa.",
      "Meditate for 10 minutes before bed.",
      "Eat dinner at least 2 hours before sleeping.",
      "Try a new vegetable in your meal today.",
      "Limit salt intake for the day.",
      "Do 20 jumping jacks in the morning.",
      "Pack a healthy homemade lunch instead of eating out.",
      "Spend 5 minutes stretching after waking up.",
      "Have a fruit smoothie instead of dessert.",
      "Take a 15-minute walk outdoors.",
      "Keep a bottle of water at your desk.",
      "Practice good posture while sitting."
    ];

    const tipEl = document.getElementById("health-tip");

    function showTip() {
      if (tipEl) {
        const today = new Date().getDate();
        tipEl.textContent = tips[today % tips.length];
      }
    }

    showTip();

    function scheduleMidnightUpdate() {
      const now = new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
      setTimeout(() => {
        showTip();
        scheduleMidnightUpdate();
      }, midnight.getTime() - now.getTime());
    }

    scheduleMidnightUpdate();

    // --- Healthy Recipes ---
    const recipes = [
      {id:1, title:"Avocado Toast", category:"Breakfast", image:"images/avocado-toast.jpg", description:"Simple and nutritious breakfast option.", ingredients:["2 slices whole grain bread","1 ripe avocado","Salt and pepper","Lemon juice"], steps:["Toast the bread slices.","Mash the avocado with salt, pepper, and lemon juice.","Spread avocado mix on toast.","Serve immediately."], nutrition:{Calories:"250 kcal", Protein:"6 g", Carbs:"28 g", Fat:"12 g"}},
      {id:2, title:"Oatmeal with Berries", category:"Breakfast", image:"images/oatmeal.jpg", description:"Warm oats topped with fresh fruits.", ingredients:["1 cup rolled oats","2 cups milk or water","1/2 cup mixed berries","Honey or maple syrup"], steps:["Cook oats in milk or water until soft.","Top with fresh berries.","Drizzle honey or syrup."], nutrition:{Calories:"280 kcal", Protein:"8 g", Carbs:"52 g", Fat:"5 g"}},
      {id:3, title:"Banana Smoothie", category:"Breakfast", image:"images/banana-smoothie.jpg", description:"Quick, creamy, and energizing smoothie.", ingredients:["1 banana","1 cup milk/almond milk","1 tbsp peanut butter","Ice cubes"], steps:["Add all ingredients to blender.","Blend until smooth.","Serve chilled."], nutrition:{Calories:"210 kcal", Protein:"7 g", Carbs:"32 g", Fat:"6 g"}},
      {id:4, title:"Greek Yogurt Bowl", category:"Breakfast", image:"images/yogurt-bowl.jpg", description:"Protein-rich yogurt with fruits & seeds.", ingredients:["1 cup Greek yogurt","1/2 cup granola","Fresh fruits","Chia seeds"], steps:["Add yogurt to a bowl.","Top with granola and fruits.","Sprinkle chia seeds."], nutrition:{Calories:"300 kcal", Protein:"15 g", Carbs:"35 g", Fat:"8 g"}},

      {id:9, title:"Grilled Chicken Salad", category:"Lunch", image:"images/chicken-salad.jpg", description:"A light and protein-packed meal.", ingredients:["150g grilled chicken breast","Mixed greens","Cherry tomatoes","Olive oil & balsamic vinegar"], steps:["Grill chicken and slice.","Mix greens and tomatoes.","Top with chicken.","Drizzle with dressing."], nutrition:{Calories:"320 kcal", Protein:"28 g", Carbs:"10 g", Fat:"18 g"}},
      {id:10, title:"Veggie Wrap", category:"Lunch", image:"images/veggie-wrap.webp", description:"Healthy wrap with hummus and veggies.", ingredients:["1 tortilla","2 tbsp hummus","Lettuce, cucumber, bell peppers","Feta cheese (optional)"], steps:["Spread hummus.","Add veggies & cheese.","Roll tightly and slice."], nutrition:{Calories:"290 kcal", Protein:"9 g", Carbs:"36 g", Fat:"12 g"}},
      {id:11, title:"Lentil Soup", category:"Lunch", image:"images/lentil-soup.jpg", description:"Hearty and filling plant-based soup.", ingredients:["1 cup red lentils","1 onion & carrot","Vegetable broth","Spices"], steps:["Sauté onion & carrot.","Add lentils and broth.","Simmer until soft.","Blend slightly & serve."], nutrition:{Calories:"260 kcal", Protein:"12 g", Carbs:"40 g", Fat:"5 g"}},
      {id:12, title:"Brown Rice Buddha Bowl", category:"Lunch", image:"images/buddha-bowl.webp", description:"Balanced meal with grains, veggies & protein.", ingredients:["1 cup brown rice","Chickpeas","Spinach, cucumber, tomatoes","Tahini dressing"], steps:["Cook rice.","Assemble with veggies & chickpeas.","Drizzle dressing."], nutrition:{Calories:"380 kcal", Protein:"13 g", Carbs:"60 g", Fat:"10 g"}},

      {id:17, title:"Quinoa Veggie Bowl", category:"Dinner", image:"images/quinoa-bowl.jpg", description:"A balanced vegetarian dinner option.", ingredients:["1 cup cooked quinoa","Roasted vegetables","Hummus","Fresh herbs"], steps:["Cook quinoa.","Roast vegetables.","Assemble with hummus.","Garnish with herbs."], nutrition:{Calories:"400 kcal", Protein:"12 g", Carbs:"60 g", Fat:"14 g"}},
      {id:18, title:"Baked Salmon with Veggies", category:"Dinner", image:"images/salmon-veggies.jpg", description:"Omega-3 rich salmon with roasted vegetables.", ingredients:["1 salmon fillet","Broccoli, carrots, zucchini","Olive oil, garlic, lemon"], steps:["Preheat oven 180°C.","Place salmon & veggies.","Drizzle oil & garlic.","Bake 20 minutes."], nutrition:{Calories:"450 kcal", Protein:"35 g", Carbs:"15 g", Fat:"26 g"}},
      {id:19, title:"Stuffed Bell Peppers", category:"Dinner", image:"images/stuffed-peppers.jpg", description:"Bell peppers stuffed with rice & beans.", ingredients:["3 bell peppers","1 cup cooked rice","1 cup beans","Cheese (optional)"], steps:["Cut peppers in half.","Fill with rice & beans.","Top with cheese.","Bake until tender."], nutrition:{Calories:"360 kcal", Protein:"14 g", Carbs:"55 g", Fat:"10 g"}},
      {id:20, title:"Whole Wheat Pasta Primavera", category:"Dinner", image:"images/pasta-primavera.webp", description:"Pasta with fresh seasonal veggies.", ingredients:["Whole wheat pasta","Zucchini, peppers, peas","Tomato sauce","Olive oil"], steps:["Cook pasta.","Sauté veggies.","Add sauce.","Mix & serve."], nutrition:{Calories:"420 kcal", Protein:"16 g", Carbs:"68 g", Fat:"11 g"}},

      {id:25, title:"Fruit & Yogurt Parfait", category:"Snacks", image:"images/parfait.webp", description:"Quick snack layered with fruit and yogurt.", ingredients:["1 cup low-fat yogurt","1/2 cup granola","1/2 cup fruit"], steps:["Layer yogurt, granola, and fruit.","Repeat layers.","Serve chilled."], nutrition:{Calories:"220 kcal", Protein:"9 g", Carbs:"32 g", Fat:"6 g"}},
      {id:26, title:"Trail Mix", category:"Snacks", image:"images/trail-mix.jpg", description:"Energy-boosting nuts & dried fruits mix.", ingredients:["Almonds","Cashews","Raisins","Dark chocolate chips"], steps:["Mix all ingredients.","Store airtight.","Snack anytime."], nutrition:{Calories:"300 kcal", Protein:"8 g", Carbs:"28 g", Fat:"18 g"}},
      {id:27, title:"Carrot Sticks with Hummus", category:"Snacks", image:"images/carrot-hummus.jpg", description:"Crunchy carrots dipped in hummus.", ingredients:["2 carrots","1/4 cup hummus"], steps:["Peel and cut carrots.","Serve with hummus."], nutrition:{Calories:"150 kcal", Protein:"4 g", Carbs:"18 g", Fat:"8 g"}},
      {id:28, title:"Apple Slices with Peanut Butter", category:"Snacks", image:"images/apple-pb.jpg", description:"Fiber-rich apple with protein-packed peanut butter.", ingredients:["1 apple","2 tbsp peanut butter"], steps:["Slice apple.","Spread peanut butter on slices."], nutrition:{Calories:"200 kcal", Protein:"5 g", Carbs:"25 g", Fat:"9 g"}},
    ];

    const recipeContainer = document.getElementById("recipeContainer");
    const searchBar = document.getElementById("searchBar");
    const categoryFilter = document.getElementById("categoryFilter");
    const recipeModal = document.getElementById("recipeModal");
    const closeModal = document.getElementById("closeModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalIngredients = document.getElementById("modalIngredients");
    const modalSteps = document.getElementById("modalSteps");
    const modalNutrition = document.getElementById("modalNutrition");

    function renderRecipes(filterText = "", category = "all") {
      if (!recipeContainer) return;
      recipeContainer.innerHTML = "";
      const filteredRecipes = recipes.filter(r => 
        r.title.toLowerCase().includes(filterText.toLowerCase()) &&
        (category === "all" || r.category === category)
      );
      if (!filteredRecipes.length) {
        recipeContainer.innerHTML = "<p>No recipes found.</p>";
        return;
      }
      filteredRecipes.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");
        card.innerHTML = `<img src="${recipe.image}" alt="${recipe.title}"><h3>${recipe.title}</h3><p>${recipe.description}</p>`;
        card.addEventListener("click", () => openRecipeModal(recipe));
        recipeContainer.appendChild(card);
      });
    }

    function openRecipeModal(recipe) {
      if (!recipeModal) return;
      modalTitle.textContent = recipe.title;
      modalImage.src = recipe.image;
      modalImage.alt = recipe.title;
      modalIngredients.innerHTML = "";
      recipe.ingredients.forEach(i => { const li=document.createElement("li"); li.textContent=i; modalIngredients.appendChild(li); });
      modalSteps.innerHTML = "";
      recipe.steps.forEach(s => { const li=document.createElement("li"); li.textContent=s; modalSteps.appendChild(li); });
      modalNutrition.innerHTML = `<thead><tr><th>Nutrient</th><th>Value</th></tr></thead><tbody>${Object.entries(recipe.nutrition).map(([k,v])=>`<tr><td>${k}</td><td>${v}</td></tr>`).join("")}</tbody>`;
      recipeModal.style.display = "flex";
    }

    closeModal?.addEventListener("click", () => recipeModal.style.display = "none");
    recipeModal?.addEventListener("click", e => { if (e.target===recipeModal) recipeModal.style.display="none"; });
    searchBar?.addEventListener("input", ()=>renderRecipes(searchBar.value, categoryFilter.value));
    categoryFilter?.addEventListener("change", ()=>renderRecipes(searchBar.value, categoryFilter.value));
    renderRecipes();

    // --- Calorie & Nutrition Calculator ---
    const calcForm = document.getElementById("calc-form");
    const resultDiv = document.getElementById("calc-result");
    const bmrEl = document.getElementById("bmr");
    const tdeeEl = document.getElementById("tdee");
    const carbsEl = document.getElementById("carbs");
    const proteinEl = document.getElementById("protein");
    const fatEl = document.getElementById("fat");
    const carbsBar = document.getElementById("carbs-bar");
    const proteinBar = document.getElementById("protein-bar");
    const fatBar = document.getElementById("fat-bar");

    calcForm?.addEventListener("submit", e => {
      e.preventDefault();
      const age = parseFloat(document.getElementById("age").value);
      const gender = document.getElementById("gender").value;
      const height = parseFloat(document.getElementById("height").value);
      const weight = parseFloat(document.getElementById("weight").value);
      const activity = parseFloat(document.getElementById("activity").value);
      if(!age || !gender || !height || !weight || !activity) return;

      const bmr = (gender==="male") ? 10*weight + 6.25*height - 5*age + 5 : 10*weight + 6.25*height -5*age -161;
      const tdee = bmr*activity;
      const carbs = tdee*0.5/4;
      const protein = tdee*0.2/4;
      const fat = tdee*0.3/9;

      bmrEl.textContent=`BMR: ${bmr.toFixed(0)} kcal/day`;
      tdeeEl.textContent=`TDEE: ${tdee.toFixed(0)} kcal/day`;
      carbsEl.textContent=Math.round(carbs);
      proteinEl.textContent=Math.round(protein);
      fatEl.textContent=Math.round(fat);

      const totalCalories = carbs*4 + protein*4 + fat*9;
      if(carbsBar) carbsBar.style.width=`${(carbs*4/totalCalories*100).toFixed(1)}%`;
      if(proteinBar) proteinBar.style.width=`${(protein*4/totalCalories*100).toFixed(1)}%`;
      if(fatBar) fatBar.style.width=`${(fat*9/totalCalories*100).toFixed(1)}%`;

      resultDiv.style.display="block";
    });

  // --- WORKOUT GENERATOR ---
  const slides = document.querySelectorAll('.slides img');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  setInterval(() => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
  }, 5000);

  showSlide(currentSlide);


    const workoutForm = document.getElementById("workout-form");
    const workoutPlanDiv = document.getElementById("workout-plan");
    const exerciseList = document.getElementById("exercise-list");
    const timerSection = document.getElementById("timer-section");
    const timerExercise = document.getElementById("timer-exercise");
    const timerEl = document.getElementById("timer");
    const startTimerBtn = document.getElementById("start-timer-btn");

    const exercises = {
      arms: {
        none: ["Push-ups", "Arm Circles", "Tricep Dips"],
        dumbbells: ["Bicep Curls", "Dumbbell Press", "Hammer Curls"],
        "resistance-band": ["Band Bicep Curl", "Band Overhead Press"],
        barbell: ["Barbell Curl", "Overhead Press"]
      },
      legs: {
        none: ["Squats", "Lunges", "Calf Raises"],
        dumbbells: ["Dumbbell Squats", "Dumbbell Lunges"],
        "resistance-band": ["Band Side Step", "Band Squats"],
        barbell: ["Barbell Squats", "Barbell Deadlift"]
      },
      core: {
        none: ["Plank", "Sit-ups", "Leg Raises"],
        dumbbells: ["Russian Twists", "Weighted Sit-ups"],
        "resistance-band": ["Band Crunches", "Band Plank Pull"],
        barbell: ["Barbell Rollouts", "Weighted Sit-ups"]
      },
      "full-body": {
        none: ["Burpees", "Mountain Climbers", "Jumping Jacks"],
        dumbbells: ["Dumbbell Clean & Press", "Renegade Rows"],
        "resistance-band": ["Band Thrusters", "Band Rows"],
        barbell: ["Deadlift", "Squat to Press"]
      }
    };

    let timerInterval;
    let currentExerciseIndex = 0;
    let currentExercises = [];

    function startTimer() {
      if (!currentExercises.length) return;
      currentExerciseIndex = 0;
      timerSection.style.display = "block";
      timerEl.textContent = "00:30";
      timerExercise.textContent = currentExercises[currentExerciseIndex];

      let timeLeft = 30;
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`;
        if (timeLeft <= 0) {
          currentExerciseIndex++;
          if (currentExerciseIndex < currentExercises.length) {
            timeLeft = 30;
            timerExercise.textContent = currentExercises[currentExerciseIndex];
          } else {
            clearInterval(timerInterval);
            timerExercise.textContent = "Workout Complete! 🎉";
          }
        }
      }, 1000);
    }

    workoutForm?.addEventListener("submit", e => {
      e.preventDefault();
      const bodyPart = document.getElementById("body-part").value;
      const equipment = document.getElementById("equipment").value;

      if (!bodyPart || !equipment) return alert("Please select both body part and equipment.");

      currentExercises = exercises[bodyPart][equipment];
      exerciseList.innerHTML = "";
      currentExercises.forEach(ex => {
        const li = document.createElement("li");
        li.textContent = ex;
        exerciseList.appendChild(li);
      });

      workoutPlanDiv.style.display = "block";
      timerSection.style.display = "block";
      timerExercise.textContent = currentExercises[0];
      timerEl.textContent = "00:30";
    });

    startTimerBtn?.addEventListener("click", () => startTimer());

    // --- Mindfulness Timer ---
    const circle = document.getElementById('breathing-circle');
    const timerDisplay = document.getElementById('mindfulness-timer');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const sessionCountEl = document.getElementById('sessionCount');
    const sound = document.getElementById('ambientSound');
    const soundToggle = document.getElementById('soundToggle');

    let breathingInterval = null;
    let timerMindfulness = 300;
    let intervalMindfulness = null;
    let sessions = parseInt(localStorage.getItem('sessions') || '0', 10);
    if (sessionCountEl) sessionCountEl.textContent = `Completed Sessions: ${sessions}`;

    function updateTimer() {
      const minutes = Math.floor(timerMindfulness / 60).toString().padStart(2, '0');
      const seconds = (timerMindfulness % 60).toString().padStart(2, '0');
      if (timerDisplay) timerDisplay.textContent = `${minutes}:${seconds}`;
    }

    function startBreathing() {
      if (breathingInterval) return;
      breathingInterval = setInterval(() => {
        circle.style.transform = circle.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
      }, 4000);
    }

    function pauseBreathing() {
      if (breathingInterval) {
        clearInterval(breathingInterval);
        breathingInterval = null;
      }
      circle.style.transform = 'scale(1)';
    }

    startBtn?.addEventListener('click', () => {
      if (intervalMindfulness) return;
      startBreathing();
      intervalMindfulness = setInterval(() => {
        if (timerMindfulness > 0) {
          timerMindfulness--;
          updateTimer();
        } else {
          clearInterval(intervalMindfulness);
          intervalMindfulness = null;
          pauseBreathing();
          sessions++;
          localStorage.setItem('sessions', sessions);
          if (sessionCountEl) sessionCountEl.textContent = `Completed Sessions: ${sessions}`;
          alert('Session Complete!');
          timerMindfulness = 300;
          updateTimer();
        }
      }, 1000);
    });

    pauseBtn?.addEventListener('click', () => {
      if (intervalMindfulness) clearInterval(intervalMindfulness);
      intervalMindfulness = null;
      pauseBreathing();
    });

    resetBtn?.addEventListener('click', () => {
      if (intervalMindfulness) clearInterval(intervalMindfulness);
      intervalMindfulness = null;
      timerMindfulness = 300;
      updateTimer();
      pauseBreathing();
      if (sound) {
        sound.pause();
        sound.currentTime = 0;
      }
      if (soundToggle) soundToggle.textContent = 'Play Sound';
    });

    soundToggle?.addEventListener('click', async () => {
      if (!sound) return;
      if (sound.paused) {
        try {
          await sound.play();
          soundToggle.textContent = 'Pause Sound';
        } catch (e) {
          console.warn('Audio blocked:', e);
        }
      } else {
        sound.pause();
        soundToggle.textContent = 'Play Sound';
      }
    });

    updateTimer();

    // --- Contact Form ---
    const contactForm = document.getElementById("contact-form");
    const popup = document.getElementById("feedback-confirmation");

    contactForm?.addEventListener("submit", e => {
      e.preventDefault();

      const fullname = document.getElementById("fname").value.trim();
      const email = document.getElementById("email-contact").value.trim();
      const message = document.getElementById("message").value.trim();

      const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
      feedbacks.push({ fullname, email, message, date: new Date().toISOString() });
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

      // Show popup
      popup?.classList.add("show");

      // Hide popup after 10 seconds
      setTimeout(() => {
        popup?.classList.remove("show");
      }, 10000);

      contactForm.reset();
    });

      // --- FAQ Toggle ---
    const faqQuestions = document.querySelectorAll(".faq-question");

      faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
          const answer = question.nextElementSibling;

          // Accordion style: close all others
          document.querySelectorAll(".faq-answer").forEach((faq) => {
            if (faq !== answer) faq.style.display = "none";
          });

          // Toggle current one
          if (answer.style.display === "block") {
            answer.style.display = "none";
          } else {
            answer.style.display = "block";
          }
        });
      }); 

    // --- Newsletter Subscription ---
    const newsletterForm = document.getElementById("newsletter-form");
    const newsletterInput = document.getElementById("email");
    const newsletterPopup = document.getElementById("newsletter-popup");

    newsletterForm?.addEventListener("submit", e => {
      e.preventDefault();
      const email = newsletterInput.value.trim();
      if (!email) return;

      const subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
      subscribers.push({ email, date: new Date().toISOString() });
      localStorage.setItem("subscribers", JSON.stringify(subscribers));

    newsletterPopup?.classList.add("show");

    setTimeout(() => newsletterPopup?.classList.remove("show"), 5000);

    });
  });
