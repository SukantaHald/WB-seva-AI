// ============================================
// SCHEMES DATA - Complete Database
// ============================================



// Function to get schemes by category
function getSchemesByCategory(category) {
    return schemesData[category] || [];
}

// Function to get scheme by ID
function getSchemeById(id) {
    for (let category in schemesData) {
        const scheme = schemesData[category].find(s => s.id === id);
        if (scheme) return scheme;
    }
    return null;
}

// Function to search schemes
function searchSchemes(query) {
    const results = [];
    const q = query.toLowerCase();
    for (let category in schemesData) {
        schemesData[category].forEach(scheme => {
            if (scheme.title.toLowerCase().includes(q) || 
                scheme.category.toLowerCase().includes(q) ||
                scheme.tags.some(tag => tag.toLowerCase().includes(q))) {
                results.push(scheme);
            }
        });
    }
    return results;
}