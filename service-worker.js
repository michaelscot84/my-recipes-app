<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#2e7d32" />
  <title>Recipe Box</title>
  <link rel="manifest" href="manifest.webmanifest">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <h1>Recipe Box</h1>
    <nav>
      <button class="tab-btn" data-tab="recipes">Recipes</button>
      <button class="tab-btn" data-tab="plan">Meal Plan</button>
      <button class="tab-btn" data-tab="shopping">Shopping List</button>
      <button class="tab-btn" data-tab="pantry">Pantry</button>
      <button class="tab-btn" data-tab="importexport">Import/Export</button>
    </nav>
  </header>

  <main>
    <!-- Recipes Tab -->
    <section id="tab-recipes" class="tab active">
      <div class="toolbar">
        <input id="search" type="search" placeholder="Search recipes or tags…" />
        <button id="addRecipeBtn">+ New Recipe</button>
      </div>
      <ul id="recipeList" class="card-list"></ul>

      <dialog id="recipeDialog">
        <form method="dialog" id="recipeForm">
          <h2 id="recipeDialogTitle">New Recipe</h2>
          <input type="hidden" id="recipeId" />
          <label>Name
            <input id="recipeName" required />
          </label>
          <label>Servings
            <input id="recipeServings" type="number" min="1" value="2" />
          </label>
          <label>Tags (comma-separated)
            <input id="recipeTags" placeholder="e.g., veggie, quick" />
          </label>
          <label>Ingredients (one per line: qty unit name)
            <textarea id="recipeIngredients" rows="6" placeholder="e.g.\n1 cup rice\n2 tbsp olive oil\n0.5 onion"></textarea>
          </label>
          <label>Steps
            <textarea id="recipeSteps" rows="6" placeholder="Instructions…"></textarea>
          </label>
          <menu>
            <button value="cancel" class="secondary">Cancel</button>
            <button id="saveRecipeBtn" value="default">Save</button>
          </menu>
        </form>
      </dialog>
    </section>

    <!-- Plan Tab -->
    <section id="tab-plan" class="tab">
      <div class="toolbar">
        <select id="addToPlanSelect"></select>
        <button id="addToPlanBtn">Add to Plan</button>
        <button id="clearPlanBtn" class="danger">Clear Plan</button>
      </div>
      <ul id="planList" class="chip-list"></ul>
      <details class="summary-box">
        <summary>Planned Ingredients (aggregated)</summary>
        <ul id="planIngredients" class="bullet-list"></ul>
        <button id="makeShoppingBtn">Create/Refresh Shopping List</button>
      </details>
    </section>

    <!-- Shopping Tab -->
    <section id="tab-shopping" class="tab">
      <div class="toolbar">
        <button id="toggleAllPurchased">Toggle All</button>
        <button id="clearPurchased" class="secondary">Clear Purchased</button>
      </div>
      <ul id="shoppingList" class="check-list"></ul>
    </section>

    <!-- Pantry Tab -->
    <section id="tab-pantry" class="tab">
      <div class="toolbar">
        <input id="pantryInput" placeholder="Add pantry item…" />
        <button id="addPantryBtn">Add</button>
        <button id="clearPantryBtn" class="danger">Clear Pantry</button>
      </div>
      <ul id="pantryList" class="chip-list"></ul>
    </section>

    <!-- Import/Export Tab -->
    <section id="tab-importexport" class="tab">
      <div class="stack">
        <button id="exportBtn">Export Data (JSON)</button>
        <label class="file-drop">Import JSON
          <input id="importFile" type="file" accept="application/json" />
        </label>
        <p class="hint">Your data is stored locally on this device (offline-first). Export regularly to back it up or move to another phone.</p>
      </div>
    </section>
  </main>

  <footer>
    <small>Offline-capable PWA • Made for home use</small>
  </footer>

  <script src="app.js"></script>
</body>
</html>