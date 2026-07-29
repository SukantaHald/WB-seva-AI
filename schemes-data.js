// ============================================
// COMPLETE SCHEME DATA - ALL CATEGORIES
// ============================================



// ============================================
// HELPER FUNCTIONS
// ============================================

function getSchemeById(id) {
    for (let category in schemesData) {
        const scheme = schemesData[category].find(s => s.id === id);
        if (scheme) return scheme;
    }
    return null;
}

function getSchemesByCategory(category) {
    return schemesData[category] || [];
}

function getTotalSchemes() {
    let count = 0;
    for (let category in schemesData) {
        count += schemesData[category].length;
    }
    return count;
}