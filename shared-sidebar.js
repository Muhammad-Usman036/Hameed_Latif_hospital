// Shared Sidebar Component for Hospital Management System
// This file contains the sidebar HTML and navigation logic

function createSharedSidebar(currentPage = 'dashboard') {
    return `
        <!-- Sidebar -->
        <div class="w-64 bg-white shadow-lg flex flex-col h-full">
            <!-- Logo -->
            <div class="p-4 border-b border-gray-200 flex-shrink-0">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <i class="fas fa-plus text-white text-sm"></i>
                    </div>
                    <span class="text-lg font-bold text-gray-800">HOSPITAL</span>
                </div>
            </div>
            
            <!-- Navigation Menu -->
            <nav class="flex-1 overflow-y-auto py-2">
                <div class="sidebar-nav-item ${currentPage === 'dashboard' ? 'active' : ''}" data-page="dashboard">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-tachometer-alt w-4"></i>
                        <span class="text-sm">Dashboard</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'bedboard' ? 'active' : ''}" data-page="bedboard">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-bed w-4"></i>
                        <span class="text-sm">Bed Board</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'admission' ? 'active' : ''}" data-page="admission">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-user-plus w-4"></i>
                        <span class="text-sm">Admission</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'appointments' ? 'active' : ''}" data-page="appointments">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-calendar-alt w-4"></i>
                        <span class="text-sm">Appointments</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'nurse' ? 'active' : ''}" data-page="nurse">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-user-nurse w-4"></i>
                        <span class="text-sm">Nurse</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'patients' ? 'active' : ''}" data-page="patients">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-users w-4"></i>
                        <span class="text-sm">Patients</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'doctors' ? 'active' : ''}" data-page="doctors">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-user-md w-4"></i>
                        <span class="text-sm">Doctors</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'doctor-schedule' ? 'active' : ''}" data-page="doctor-schedule">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-clock w-4"></i>
                        <span class="text-sm">Doctor Schedule</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'payments' ? 'active' : ''}" data-page="payments">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-credit-card w-4"></i>
                        <span class="text-sm">Payments</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'discharge' ? 'active' : ''}" data-page="discharge">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-sign-out-alt w-4"></i>
                        <span class="text-sm">Patient Discharge</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'clinical-chart' ? 'active' : ''}" data-page="clinical-chart">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-chart-line w-4"></i>
                        <span class="text-sm">Clinical Chart</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'transfer' ? 'active' : ''}" data-page="transfer">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-exchange-alt w-4"></i>
                        <span class="text-sm">Patient Transfer</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'inventory' ? 'active' : ''}" data-page="inventory">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-boxes w-4"></i>
                        <span class="text-sm">Inventory</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'departments' ? 'active' : ''}" data-page="departments">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-building w-4"></i>
                        <span class="text-sm">Departments</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'orders' ? 'active' : ''}" data-page="orders">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-shopping-cart w-4"></i>
                        <span class="text-sm">Orders</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'tender' ? 'active' : ''}" data-page="tender">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-gavel w-4"></i>
                        <span class="text-sm">Tender Console</span>
                    </div>
                </div>
                
                <div class="sidebar-nav-item ${currentPage === 'forum' ? 'active' : ''}" data-page="forum">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-comments w-4"></i>
                        <span class="text-sm">Forum Messages</span>
                    </div>
                </div>
            </nav>
        </div>
    `;
}

// Navigation mapping
const navigationMap = {
    'dashboard': 'index.html',
    'bedboard': 'bed-board.html',
    'admission': 'ipd-admission.html',
    'appointments': 'appointments.html',
    'nurse': 'nurse.html',
    'patients': 'index.html#patients',
    'doctors': 'doctors.html',
    'doctor-schedule': 'doctor-schedule.html',
    'payments': 'payments.html',
    'discharge': 'discharge.html',
    'clinical-chart': 'clinical-chart.html',
    'transfer': 'transfer.html',
    'inventory': 'inventory.html',
    'departments': 'departments.html',
    'orders': 'orders.html',
    'tender': 'tender.html',
    'forum': 'forum.html'
};

// Initialize shared sidebar
function initSharedSidebar(currentPage = 'dashboard') {
    // Add CSS for sidebar
    const style = document.createElement('style');
    style.textContent = `
        .sidebar-nav-item {
            padding: 0.5rem 1rem;
            margin: 0 0.5rem;
            border-radius: 0.375rem;
            cursor: pointer;
            transition: all 0.2s;
            color: #6b7280;
        }
        .sidebar-nav-item:hover {
            background-color: #f9fafb;
        }
        .sidebar-nav-item.active {
            background-color: var(--accent-100, #ffedd5);
            color: var(--accent-600, #ea580c);
            border-right: 4px solid var(--accent-500, #f97316);
            border-radius: 0.375rem 0 0 0.375rem;
        }
    `;
    document.head.appendChild(style);

    // Add navigation event listeners
    document.addEventListener('click', function(e) {
        const navItem = e.target.closest('.sidebar-nav-item');
        if (navItem) {
            const page = navItem.dataset.page;
            const targetUrl = navigationMap[page];
            
            if (targetUrl) {
                // Handle special cases
                if (page === 'patients' && window.location.pathname.includes('index.html')) {
                    // If already on dashboard, just switch view and update active state
                    if (typeof showView === 'function') {
                        showView('patients');
                        // Update active state in sidebar
                        updateActiveState('patients');
                    }
                } else {
                    // Navigate to new page
                    window.location.href = targetUrl;
                }
            }
        }
    });

    // Function to update active state
    function updateActiveState(activePage) {
        document.querySelectorAll('.sidebar-nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === activePage) {
                item.classList.add('active');
            }
        });
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createSharedSidebar, initSharedSidebar, navigationMap };
}
