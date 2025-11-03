// Currency Helper - Global Currency Management
const CURRENCY_KEY = 'hm_currency_preference';

// Currency configuration
const CURRENCIES = {
    PKR: {
        code: 'PKR',
        symbol: 'Rs.',
        name: 'Pakistani Rupee',
        locale: 'en-PK'
    },
    USD: {
        code: 'USD',
        symbol: '$',
        name: 'US Dollar',
        locale: 'en-US'
    },
    AED: {
        code: 'AED',
        symbol: 'د.إ',
        name: 'UAE Dirham',
        locale: 'ar-AE'
    },
    SAR: {
        code: 'SAR',
        symbol: '﷼',
        name: 'Saudi Riyal',
        locale: 'ar-SA'
    }
};

// Get current currency from localStorage or default to PKR
function getCurrentCurrency() {
    const saved = localStorage.getItem(CURRENCY_KEY);
    return saved && CURRENCIES[saved] ? saved : 'PKR';
}

// Set currency preference
function setCurrency(currencyCode) {
    if (CURRENCIES[currencyCode]) {
        localStorage.setItem(CURRENCY_KEY, currencyCode);
        // Dispatch event to notify other parts of the app
        window.dispatchEvent(new CustomEvent('currencyChanged', { detail: currencyCode }));
        return true;
    }
    return false;
}

// Get currency symbol
function getCurrencySymbol(currencyCode = null) {
    const code = currencyCode || getCurrentCurrency();
    return CURRENCIES[code].symbol;
}

// Get currency code
function getCurrencyCode() {
    return getCurrentCurrency();
}

// Format amount with currency
function formatCurrency(amount, currencyCode = null) {
    const code = currencyCode || getCurrentCurrency();
    const currency = CURRENCIES[code];
    const formattedAmount = parseFloat(amount || 0).toFixed(2);
    
    // Format based on currency
    switch(code) {
        case 'PKR':
            return `${currency.symbol} ${parseFloat(formattedAmount).toLocaleString('en-PK')}`;
        case 'USD':
            return `${currency.symbol}${parseFloat(formattedAmount).toLocaleString('en-US')}`;
        case 'AED':
        case 'SAR':
            return `${formattedAmount} ${currency.symbol}`;
        default:
            return `${currency.symbol} ${formattedAmount}`;
    }
}

// Parse currency string to number
function parseCurrency(value) {
    if (typeof value === 'number') return value;
    if (typeof value !== 'string') return 0;
    
    // Remove currency symbols and commas
    const cleaned = value.replace(/[^\d.-]/g, '');
    return parseFloat(cleaned) || 0;
}

// Create currency selector HTML
function createCurrencySelector(selectedCurrency = null, onSelect = null) {
    const current = selectedCurrency || getCurrentCurrency();
    const selectorId = 'currency-selector-' + Math.random().toString(36).substr(2, 9);
    
    let html = `
        <div class="currency-selector-wrapper">
            <label class="block text-sm font-medium text-gray-700 mb-2">Currency</label>
            <div class="relative">
                <select id="${selectorId}" class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white">
    `;
    
    Object.keys(CURRENCIES).forEach(code => {
        const currency = CURRENCIES[code];
        const selected = code === current ? 'selected' : '';
        html += `<option value="${code}" ${selected}>${currency.code} - ${currency.name}</option>`;
    });
    
    html += `
                </select>
                <i class="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
        </div>
    `;
    
    // Add event listener after DOM is ready
    setTimeout(() => {
        const selector = document.getElementById(selectorId);
        if (selector) {
            selector.addEventListener('change', function(e) {
                const newCurrency = e.target.value;
                setCurrency(newCurrency);
                if (onSelect && typeof onSelect === 'function') {
                    onSelect(newCurrency);
                }
                // Reload currency displays
                updateCurrencyDisplays();
            });
        }
    }, 100);
    
    return html;
}

// Update all currency displays on the page
function updateCurrencyDisplays() {
    const currencyCode = getCurrentCurrency();
    const symbol = getCurrencySymbol();
    
    // Update all elements with currency symbols
    document.querySelectorAll('[data-currency]').forEach(el => {
        const amount = el.getAttribute('data-amount') || el.textContent;
        const formatted = formatCurrency(amount, currencyCode);
        el.textContent = formatted;
    });
    
    // Update currency symbol placeholders
    document.querySelectorAll('[data-currency-symbol]').forEach(el => {
        el.textContent = symbol;
    });
    
    // Update currency code placeholders
    document.querySelectorAll('[data-currency-code]').forEach(el => {
        el.textContent = currencyCode;
    });
}

// Initialize currency on page load
function initCurrency() {
    const currency = getCurrentCurrency();
    
    // Listen for currency changes
    window.addEventListener('currencyChanged', function(e) {
        updateCurrencyDisplays();
        if (typeof window.onCurrencyChange === 'function') {
            window.onCurrencyChange(e.detail);
        }
    });
    
    // Update displays on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateCurrencyDisplays);
    } else {
        updateCurrencyDisplays();
    }
}

// Export for global use
if (typeof window !== 'undefined') {
    window.CurrencyHelper = {
        getCurrentCurrency,
        setCurrency,
        getCurrencySymbol,
        getCurrencyCode,
        formatCurrency,
        parseCurrency,
        createCurrencySelector,
        updateCurrencyDisplays,
        initCurrency,
        CURRENCIES
    };
    
    // Auto-initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCurrency);
    } else {
        initCurrency();
    }
}
