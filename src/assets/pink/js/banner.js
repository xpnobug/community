document.ready(function() {
    const componentBanner = new Vue({
        el: '#banner',
        methods: {
            targetSelf: function(target) {
                link(target, 'self');
            },
            targetBlank: function(target) {
                link(target, 'blank');
            }
        }
    });
});