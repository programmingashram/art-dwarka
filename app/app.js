
const products = {
  lampPoles: [
    {
      name: "Elegant Lamp Pole",
      seo: "premium-modern-lamp-pole",
      image: "https://polelightstore.com/wp-content/uploads/2022/02/pole-light-1.jpg",
      pageLink: "#",
      enquiryLink: "#"
    },
    {
      name: "Steel Street Lamp",
      seo: "steel-street-lamp",
      image: "https://t4.ftcdn.net/jpg/03/28/13/51/360_F_328135141_KiYUAnogffC5rIgQOJjWFF7cArswVA4f.jpg",
      pageLink: "#",
      enquiryLink: "#"
    },
    {
      name: "Steel Street Lamp",
      seo: "steel-street-lamp",
      image: "https://t4.ftcdn.net/jpg/03/28/13/51/360_F_328135141_KiYUAnogffC5rIgQOJjWFF7cArswVA4f.jpg",
      pageLink: "#",
      enquiryLink: "#"
    },
    {
      name: "Steel Street Lamp",
      seo: "steel-street-lamp",
      image: "https://t4.ftcdn.net/jpg/03/28/13/51/360_F_328135141_KiYUAnogffC5rIgQOJjWFF7cArswVA4f.jpg",
      pageLink: "#",
      enquiryLink: "#"
    }
  ],
  ironGates: [
    {
      name: "Luxury Wrought Iron Gate",
      seo: "wrought-iron-gate",
      image: "https://www.mrmtech.in/wp-content/uploads/2023/12/Luxury-Wrought-Iron-Steel-Security-Entrance-Gate-for-Villa-2.jpg",
      pageLink: "#",
      enquiryLink: "#"
    },
    {
      name: "Classic Main Gate",
      seo: "classic-main-gate",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/1/AY/HU/EG/146470281/wrought-iron-main-gate.jpg",
      pageLink: "#",
      enquiryLink: "#"
    }
  ],
  grills: [
    {
      name: "Decorative Balcony Grill",
      seo: "balcony-grill-design",
      image: "https://t3.ftcdn.net/jpg/02/82/32/84/360_F_282328474_tOogNJB7wA1d1i49xChqR3ozKSsSkFeT.jpg",
      pageLink: "#",
      enquiryLink: "#"
    },
    {
      name: "Window Grill Design",
      seo: "window-grill-design",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/6/UC/SS/IE/141091214/decorative-window-grill-design.jpg",
      pageLink: "#",
      enquiryLink: "#"
    }
  ]
};

function renderProducts(category, targetId) {
  const container = document.getElementById(targetId);
  const items = products[category];
  if (!container || !items) return;

  container.innerHTML = `
    <div class="row g-4">
      ${items.map(item => `
        <div class="col-md-4 col-sm-6 col-6">
          <div class="card">
            <img src="${item.image}" alt="${item.seo}" class="card-img-top img-fixed rounded-0">
            <div class="card-body text-center">
              <h6>${item.name}</h6>
              <div class="mt-2">
                <a href="${item.pageLink}" class="text-decoration-none text-light me-3">View Details</a>
                <a href="${item.enquiryLink}" class="enquiry-btn">Enquiry</a>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

renderProducts("lampPoles", "lampPoles");
renderProducts("ironGates", "ironGates");
renderProducts("grills", "grills");
