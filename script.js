const pages = {
  menu: document.getElementById('page-menu'),
  presentation: document.getElementById('page-presentation'),
  categories: document.getElementById('page-categories'),
  'category-boucles': document.getElementById('page-category-boucles'),
  'category-colliers': document.getElementById('page-category-colliers'),
  'category-bracelets': document.getElementById('page-category-bracelets'),
  commande: document.getElementById('page-commande'),
  contact: document.getElementById('page-contact'),
};

const buttons = document.querySelectorAll('[data-page-btn]');

// Catalogue centralisé
const products = [
  {
    id: 'boucles-madeleine',
    name: 'Boucles Madeleine',
    category: 'boucles',
    materials: 'Laiton plaqué or jaune et perle blanche',
    price: '23€',
    details: 'à tiges',
    description: 'Ces boucles d’oreilles fleurs seraient magnifiques au quotidien ou comme bijoux de mariée !',
    images: ['image3.jpg','image7.jpg','image53.jpg'],
    personnalisable: false
  },
  {
    id: 'boucles-madeleine',
    name: 'Boucles Madeleine',
    category: 'boucles',
    materials: 'Laiton plaqué or jaune et perle blanche',
    price: '23€',
    details: 'à tiges',
    description: 'Ces boucles d’oreilles fleurs seraient magnifiques au quotidien ou comme bijoux de mariée !',
    images: ['image3.jpg','image7.jpg','image53.jpg'],
    personnalisable: false
  },
  {
    id: 'boucles-angelina',
    name: 'Boucles Angelina',
    category: 'boucles',
    materials: 'Acier inoxydable',
    price: '17€',
    details: 'petites créoles pour oreilles percées',
    description: 'Découvrez notre Boucle d’Oreilles petite créole pendante pampilles vertes',
    images: ['angelina1.jpeg','angelina2.jpeg'],
    personnalisable: false
  },
  {
    id: 'boucles-sixtine',
    name: 'Boucles Sixtine',
    category: 'boucles',
    materials: 'Acier inoxydable doré',
    price: '23€',
    details: 'à tiges',
    description: 'Elégantes boucles d’oreilles Sixtine, assemblées à la main',
    images: ['image4.jpg','image18.jpg','image22.jpg','image24.jpg'],
    personnalisable: false
  },
  {
    id: 'boucles-roxanne',
    name: 'Boucles Roxanne',
    category: 'boucles',
    materials: 'Perles',
    price: '20€',
    details: 'à tiges',
    description: 'Paire de boucles d’oreilles élégantes et ornées de perles à motifs de porcelaine',
    images: ['image10.jpg','image35.jpg'],
    personnalisable: false
  },
  {
    id: 'bracelet-marin',
    name: 'Bracelet Marin',
    category: 'bracelets',
    materials: 'Elastique',
    price: '18€',
    details: 'Marron blanc et noir',
    description: 'Bracelet de Xcm de large, avec elastiques',
    images: ['image2.jpg','image6.jpg'],
    personnalisable: false
  },
  {
    id: 'bracelet-laetitia',
    name: 'Bracelet Laetitia',
    category: 'bracelets',
    materials: 'Perles',
    price: '15€',
    details: 'Fermoir ajustable',
    description: 'Bracelet simple à couches multiples, ajustable grâce à son fermoir réglable',
    images: ['image13.jpg','image46.jpg','image55.jpg'],
    personnalisable: false
  },
  {
    id: 'bracelet-georges',
    name: 'Bracelet Georges',
    category: 'bracelets',
    materials: 'Ruban et médaille',
    price: '15€',
    details: 'Personnalisable',
    description: 'Une médaille dorée avec une croix blanche, le tout sur un ruban de couleur',
    images: ['image30.jpg','image32.jpg','image12.jpg','image15.jpg','image54.jpg'],
    personnalisable: true
  },
  {
    id: 'bracelet-sybille',
    name: 'Bracelet Sybille',
    category: 'bracelets',
    materials: 'Elastique',
    price: '19€',
    details: 'Couleurs: Rose; violet; vert; bleu',
    description: 'Bracelet élastique géométrique, désigné tendance, mini manchette. Revers en aciers inoxydable',
    images: ['image23.jpg','image26.jpg','image29.jpg','image36.jpg','image50.jpg'],
    personnalisable: false
  },
  {
    id: 'bracelet-sybille-2',
    name: 'Bracelet Sybille',
    category: 'bracelets',
    materials: 'Elastique',
    price: '19€',
    details: 'Couleurs: Marron, gris, rose, doré',
    description: 'Bracelet élastique géométrique, désigné tendance, mini manchette. Revers en aciers inoxydable',
    images: ['image9.jpg','image19.jpg','image29.jpg','image36.jpg','image50.jpg'],
    personnalisable: false
  },
  {
    id: 'bracelet-francois',
    name: 'Bracelet François',
    category: 'bracelets',
    materials: 'Perles',
    price: '15€',
    details: 'Couleurs: Rouge, vert, violet, café, crème',
    description: 'Bracelet stylisé à forme carré et ronde de 1.5 cm de diamètre par perles. Montées sur fil élastique solide, ce bracelet s’adapte à tous les poignets.',
    images: ['image45.jpg','image28.jpg','image39.jpg','image40.jpg','image44.jpg','image47.jpg','image48.jpg','image51.jpg','image56.jpg'],
    personnalisable: false
  },
  {
    id: 'collier-pierres',
    name: 'Collier Grosses Pierres',
    category: 'colliers',
    materials: 'Pierres',
    price: '30€',
    details: 'Plusieurs coloris',
    description: 'Pierres de couleurs: Violet, Rouge, Bleu foncé, Vert foncé',
    images: ['image1.jpg','image17.jpg','image27.jpg','image33.jpg','image37.jpg'],
    personnalisable: false
  },
  {
    id: 'medaille-marie',
    name: 'Médaille Marie',
    category: 'colliers',
    materials: 'Perles et médaille',
    price: '17€',
    details: 'Couleurs: Voir les photos',
    description: 'Médaille de Marie entourée de perles',
    images: ['image8.jpg','image16.jpg','image20.jpg','image31.jpg','image38.jpg','image52.jpg'],
    personnalisable: true
  },
  {
    id: 'collier-marie-a',
    name: 'Collier Marie sur perles',
    category: 'colliers',
    materials: 'Perles et médaille',
    price: '25€',
    details: 'Couleurs: Voir les photos',
    description: 'Médaille de Marie entourée de perles + collier en perles',
    images: ['image11.jpg','image43.jpg'],
    personnalisable: true
  },
  {
    id: 'collier-marie-b',
    name: 'Collier Marie sur chaine',
    category: 'colliers',
    materials: 'Perles et médaille',
    price: '30€',
    details: 'Couleurs: Voir les photos',
    description: 'Médaille de Marie entourée de perles + collier chaîne en acier inoxydable (perles blanches/noires/simple)',
    images: ['medaille chaine marie 3.jpeg','medaille chaine marie 2.jpeg','medaille chaine marie.jpeg','medaille marie 1.webp','image5.jpg','image14.jpg','image49.jpg'],
    personnalisable: true
  },
  {
    id: 'couleurs-colliers-marie',
    name: 'Couleurs collier Marie',
    category: 'colliers',
    materials: '4 palettes',
    price: '-',
    details: 'Couleurs: Voir les photos',
    description: 'Précisez dans la personnalisation',
    images: ['image21.jpg','image25.jpg','image34.jpg','image41.jpg','image42.jpg'],
    personnalisable: false
  }
];

function getTopButtonNameFromPage(pageName) {
  if (pageName.startsWith('category-')) return 'categories';
  return pageName;
}

// Panier avec localStorage
function getCart() {
  const raw = localStorage.getItem('cart');
  if (!raw) return [];
  try {
    return JSON.parse(raw) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(p => p.id === product.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + (product.quantity || 1);
    if (product.personalization) {
      existing.personalization = product.personalization;
    }
  } else {
    cart.push(product);
  }
  saveCart(cart);
}

function renderCartOnOrderPage() {
  const container = document.getElementById('order-cart');
  const summaryEl = document.getElementById('order-summary');
  if (!container) return;

  const cart = getCart();

  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p style="font-size:2.1vmin;">Votre panier est vide.</p>';
    summaryEl.textContent = '';
    return;
  }

  cart.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'card cart-card';
    article.dataset.index = index;

    article.innerHTML = `
      <div class="card-info">
        <div class="card-info-left">
          <p><strong>${item.name || item.id}</strong></p>
          <p>${item.materials}</p>
          <p>${item.price}</p>
          ${item.personalization ? `<p><em>Perso : ${item.personalization}</em></p>` : ''}
        </div>
        <div class="card-info-right" data-controls-index="${index}">
          <div style="display:flex; align-items:center; gap:0.5vmin;">
            <button data-action="minus" data-index="${index}" style="padding:0 0.8vmin;">−</button>
            <span>${item.quantity || 1}</span>
            <button data-action="plus" data-index="${index}" style="padding:0 0.8vmin;">+</button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(article);
  });

  const total = cart.reduce((sum, item) => {
    const num = parseFloat((item.price || '').replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
    return sum + num * (item.quantity || 1);
  }, 0);

  summaryEl.textContent = `Total estimé : ${total.toFixed(2)} €`;

  // Event delegation : +/- et clic carte
  container.onclick = function (e) {
    const btn = e.target.closest('button[data-action]');
    if (btn) {
      const action = btn.dataset.action;
      const idx = parseInt(btn.dataset.index, 10);
      const cart = getCart();
      const item = cart[idx];
      if (!item) return;

      if (action === 'plus') {
        item.quantity = (item.quantity || 1) + 1;
      } else if (action === 'minus') {
        const newQty = (item.quantity || 1) - 1;
        if (newQty <= 0) {
          const confirmDelete = confirm('Supprimer du panier ?');
          if (confirmDelete) {
            cart.splice(idx, 1);
          }
        } else {
          item.quantity = newQty;
        }
      }

      saveCart(cart);
      renderCartOnOrderPage();
      return;
    }

    const card = e.target.closest('.card.cart-card');
    if (card) {
      const idx = parseInt(card.dataset.index, 10);
      openLightboxFromCart(idx);
    }
  };
}

const pageTransition = document.querySelector('.page-transition');

function showPage(name) {
  const target = pages[name] || pages.menu;

  pageTransition.classList.add('active');

  setTimeout(() => {
    Object.values(pages).forEach(p => {
      if (p) p.classList.remove('active');
    });
    if (target) target.classList.add('active');

    const topName = getTopButtonNameFromPage(name);
    buttons.forEach(b => {
      const isTop = (b.dataset.pageBtn === topName);
      b.dataset.pageActive = isTop ? 'true' : 'false';
    });

    if (name === 'commande') {
      renderCartOnOrderPage();
    }

    setTimeout(() => {
      pageTransition.classList.remove('active');
    }, 50);

  }, 500);
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => showPage(btn.dataset.pageBtn));
});

const hash = window.location.hash.replace('#', '');
if (hash && pages[hash]) showPage(hash);
else showPage('menu');

let currentProduct = null;
let currentCartIndex = null;

// Galerie d'images dans la lightbox
let currentImages = [];
let currentImageIndex = 0;

const lightboxImgEl = document.getElementById('lightbox-img');
const leftArrow = document.querySelector('.lightbox-arrow-left');
const rightArrow = document.querySelector('.lightbox-arrow-right');

function updateLightboxImage() {
  if (!currentImages.length) return;
  const src = currentImages[currentImageIndex];
  lightboxImgEl.src = src;
  lightboxImgEl.alt = currentProduct ? currentProduct.name : '';
}

leftArrow.addEventListener('click', function (e) {
  e.stopPropagation();
  if (!currentImages.length) return;
  currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
  updateLightboxImage();
});

rightArrow.addEventListener('click', function (e) {
  e.stopPropagation();
  if (!currentImages.length) return;
  currentImageIndex = (currentImageIndex + 1) % currentImages.length;
  updateLightboxImage();
});

function openLightbox(productName, materials, price, description, options = {}) {
  const {
    personalizationFromCart = '',
    mode = 'catalogue',
    images = [],
    productId = null,
    personnalisable = true   // par défaut: perso possible
  } = options;

  const lightbox = document.getElementById('lightbox');
  const titleEl = document.getElementById('lightbox-title');
  const detailsEl = document.getElementById('lightbox-details');
  const descriptionEl = document.getElementById('lightbox-description');
  const customEl = document.getElementById('lightbox-custom');
  const addBtn = document.getElementById('lightbox-add');
  const statusEl = document.getElementById('lightbox-status');

  currentImages = images.length ? images : [];
  currentImageIndex = 0;
  updateLightboxImage();

  customEl.value = personalizationFromCart || '';
  customEl.disabled = !personnalisable;
  customEl.placeholder = personnalisable
    ? 'Couleurs/Taille'
    : 'Personnalisation non disponible pour cet article';
  
  const customWrapper = document.getElementById('lightbox-custom-wrapper');
  if (customWrapper) {
    customWrapper.style.opacity = personnalisable ? '1' : '0';
    customWrapper.style.pointerEvents = personnalisable ? 'auto' : 'none';
  }
  
  statusEl.textContent = '';
  addBtn.textContent = mode === 'commande' ? 'Mettre à jour' : 'Ajouter au panier';

  titleEl.textContent = productName;
  detailsEl.innerHTML = `
    <p><strong>Matériaux:</strong> ${materials}</p>
    ${price ? `<p><strong>Prix:</strong> ${price}</p>` : ''}
  `;
  descriptionEl.innerHTML = description ? `<p>${description}</p>` : '';

  currentProduct = { id: productId, name: productName, materials, price, personnalisable };

const newAddBtn = addBtn.cloneNode(true);
addBtn.parentNode.replaceChild(newAddBtn, addBtn);

newAddBtn.addEventListener('click', function () {
  if (!currentProduct) return;

  const personalization = currentProduct.personnalisable ? customEl.value.trim() : '';
  const cart = getCart();

  if (mode === 'commande' && currentCartIndex !== null) {
    const item = cart[currentCartIndex];
    if (item) {
      item.personalization = personalization;
      saveCart(cart);
      renderCartOnOrderPage();
    }
    newAddBtn.textContent = 'Mis à jour';
  } else {
    addToCart({
      id: currentProduct.id || currentProduct.name,
      name: currentProduct.name,
      materials: currentProduct.materials,
      price: currentProduct.price,
      quantity: 1,
      personalization
    });
    newAddBtn.textContent = 'Ajouté au panier';
  }

  statusEl.textContent = '';
});


  document.body.classList.add('lightbox-open');
  lightbox.classList.add('active');
}

function openLightboxFromCart(index) {
  const cart = getCart();
  const item = cart[index];
  if (!item) return;

  currentCartIndex = index;

  const baseProduct = products.find(p => p.id === item.id);

  openLightbox(
    item.name || item.id,
    item.materials,
    item.price,
    baseProduct ? baseProduct.description : '',
    {
      personalizationFromCart: item.personalization || '',
      mode: 'commande',
      images: baseProduct ? baseProduct.images : [],
      productId: item.id,
      personnalisable: baseProduct ? baseProduct.personnalisable === true : true
    }
  );
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.classList.remove('lightbox-open');
}

document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});

function buildOrderEmailBody() {
  const cart = getCart();
  if (cart.length === 0) {
    return 'Panier vide.';
  }

  let body = 'Bonjour,%0D%0A%0D%0AJe souhaite passer la commande suivante :%0D%0A%0D%0A';

  cart.forEach(item => {
    body += `- ${item.quantity || 1} x ${item.name || item.id} (${item.materials}, ${item.price})%0D%0A`;
    if (item.personalization) {
      body += `  Personnalisation : ${item.personalization}%0D%0A`;
    }
  });

  body += '%0D%0AMerci,%0D%0A';

  return body;
}

const sendOrderBtn = document.getElementById('send-order');
if (sendOrderBtn) {
  sendOrderBtn.addEventListener('click', () => {
    const cart = getCart();
    if (cart.length === 0) {
      alert('Votre panier est vide.');
      return;
    }

    const subject = encodeURIComponent('Nouvelle commande Prudence Bijoux');
    const body = buildOrderEmailBody();
    const mailto = `mailto:prudelaruelle@yahoo.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  });
}

function createProductCard(product) {
  const article = document.createElement('article');
  article.className = 'card clickable';
  article.dataset.productId = product.id;

  article.innerHTML = `
    <div class="card-image"><img src="${product.images[0]}" alt="prudence-bijoux"></div>
    <div class="card-info">
      <div class="card-info-left">
        <p>${product.name}</p>
        <p>${product.materials}</p>
        <p>${product.details}</p>
      </div>
      <div class="card-info-right"><p>${product.price}</p></div>
    </div>
  `;

  article.addEventListener('click', () => {
    openLightbox(
      product.name,
      product.materials,
      product.price,
      product.description,
      {
        images: product.images,
        productId: product.id,
        personnalisable: product.personnalisable === true
      }
    );
  });

  return article;
}

function renderProductCategories() {
  const bouclesContainer = document.getElementById('cards-boucles');
  const colliersContainer = document.getElementById('cards-colliers');
  const braceletsContainer = document.getElementById('cards-bracelets');

  if (bouclesContainer) {
    bouclesContainer.innerHTML = '';
    products
      .filter(p => p.category === 'boucles')
      .forEach(p => bouclesContainer.appendChild(createProductCard(p)));
  }

  if (colliersContainer) {
    colliersContainer.innerHTML = '';
    products
      .filter(p => p.category === 'colliers')
      .forEach(p => colliersContainer.appendChild(createProductCard(p)));
  }

  if (braceletsContainer) {
    braceletsContainer.innerHTML = '';
    products
      .filter(p => p.category === 'bracelets')
      .forEach(p => braceletsContainer.appendChild(createProductCard(p)));
  }
}

// Initialisation des catégories
renderProductCategories();

















