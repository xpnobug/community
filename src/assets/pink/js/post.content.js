const moreContent = (action, btn) => {
    let area = btn.parentNode;
    if (area.classList.contains('more-area')) {
        switch (action) {
            case 'more':
                area.classList.add('complete');
                break;
            case 'less':
                area.classList.remove('complete');
                break;
        }
    }
};