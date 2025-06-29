// scripts/tagFilter.js

document.addEventListener("DOMContentLoaded", () => {
  const tagButtons = document.querySelectorAll("#tag-filter button[data-tag]");
  const productList = document.getElementById("product-list");
  if (!productList) return;
  const allProducts = Array.from(productList.children);
  const searchForm = document.getElementById("searchForm");
  const searchInput = searchForm?.querySelector("input[type='search']");

  function getSelectedTags() {
    return Array.from(tagButtons)
      .filter((btn) => btn.getAttribute("data-selected") === "true")
      .map((btn) => btn.getAttribute("data-tag"));
  }

  function updateTagButtons() {
    // Ambil semua tag dari semua produk jika tidak ada pencarian,
    // atau dari produk yang sedang tampil jika ada pencarian
    const searchValue = searchInput?.value.trim().toLowerCase() || "";
    const visibleTags = new Set();
    if (searchValue === "") {
      // Tidak ada pencarian: tampilkan semua tag
      allProducts.forEach((card) => {
        Array.from(card.querySelectorAll("span")).forEach((s) => {
          const tag = s.textContent?.trim();
          if (tag) visibleTags.add(tag);
        });
      });
    } else {
      // Ada pencarian: hanya tag dari produk yang tampil
      allProducts.forEach((card) => {
        if (card.style.display !== "none") {
          Array.from(card.querySelectorAll("span")).forEach((s) => {
            const tag = s.textContent?.trim();
            if (tag) visibleTags.add(tag);
          });
        }
      });
    }
    tagButtons.forEach((btn) => {
      const tag = btn.getAttribute("data-tag");
      if (visibleTags.has(tag)) {
        btn.style.display = "";
      } else {
        btn.style.display = "none";
        btn.setAttribute("data-selected", "false"); // Deselect if not visible
      }
    });
  }

  function filterProducts() {
    const selectedTags = getSelectedTags();
    const searchValue = searchInput?.value.trim().toLowerCase() || "";
    allProducts.forEach((card) => {
      const tagSpans = Array.from(card.querySelectorAll("span")).map((s) =>
        s.textContent?.trim()
      );
      const title = card.querySelector("h3")?.textContent?.toLowerCase() || "";
      const desc = card.querySelector("p")?.textContent?.toLowerCase() || "";
      const matchesTag =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => tagSpans.includes(tag));
      const matchesSearch =
        searchValue === "" ||
        title.includes(searchValue) ||
        desc.includes(searchValue) ||
        tagSpans.some((tag) => tag?.toLowerCase().includes(searchValue));
      if (matchesTag && matchesSearch) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
    updateTagButtons();
  }

  tagButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const tag = this.getAttribute("data-tag");
      const isSelected = this.getAttribute("data-selected") === "true";
      if (tag === "") {
        // If 'Semua' is clicked, deselect all others
        tagButtons.forEach((b) =>
          b.setAttribute(
            "data-selected",
            b.getAttribute("data-tag") === "" ? "true" : "false"
          )
        );
      } else {
        // Deselect 'Semua' if any other tag is selected
        tagButtons.forEach((b) => {
          if (b.getAttribute("data-tag") === "")
            b.setAttribute("data-selected", "false");
        });
        this.setAttribute("data-selected", isSelected ? "false" : "true");
        // If none selected, select 'Semua'
        if (getSelectedTags().length === 0) {
          tagButtons.forEach(
            (b) =>
              b.getAttribute("data-tag") === "" &&
              b.setAttribute("data-selected", "true")
          );
        }
      }
      filterProducts();
    });
  });

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      filterProducts();
    });
    searchInput.addEventListener("input", function () {
      filterProducts();
    });
  }

  // Inisialisasi: tampilkan semua produk
  filterProducts();
});
