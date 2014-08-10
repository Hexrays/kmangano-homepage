(function(){
    'use strict';

    var app = app || {};

    app.list = {
        el        : document.querySelector('.km-ul'),
        $lastItem : null,
        els       : [],
        used      : [],
        free      : [
            'Design',
            'Art Direction',
            'Ui & Ux',
            'Print',
            'New York',
            'Kathryn',
            'Smart <span class="km-st">Ass</span> Design',
            'Katie',
            'Brooklyn',
            'Interaction Design',
            'User Experience',
            'Whiskey Love',
            'Cat Love',
            'project manager',
            'Team Leader',
            'Typography',
            'Branding',
            'Start-ups',
            'boutique agencies',
            'Apps',
            'Websites',
            'Responsive',
            'Logos',
            'Signage',
            'Packaging',
            'iOS',
            'Android',
            'Freelance',
            'Fulltime',
            'Mentor',
            'NYC',
            'GD',
            'Mangano',
            'A lot of fun',
            'Great work',
            'Good times'
        ],

        init: function() {
            this.makeList();
        },

        makeList : function() {
            var frag       = document.createDocumentFragment(),
                totalItems = this.free.length,
                itemNumber, slogan, listItem;

            while(totalItems--) {
                itemNumber = Math.floor(Math.random() * totalItems);
                slogan     = this.free[itemNumber];

                listItem   = this.createLi(slogan);

                this.free.splice(itemNumber, 1);
                this.used.push(slogan);

                frag.appendChild(listItem);
            }
            this.el.appendChild(frag);
            this.resetFree();
            this.setLast();
        },

        setLast: function(){
            var self = this;
            this.$lastItem = $('.km-slogan:nth-last-child(6)');

            this.$lastItem.waypoint(function(direction){
                // self.$lastItem = null;
                if(direction === 'down') {
                    self.destroyWaypoint();
                    self.makeList();
                }

            },{
                offset: '100%'
            });

        },

        destroyWaypoint: function(){
            this.$lastItem.waypoint('destroy');
        },

        createLi: function(words){
            var li = document.createElement('li'),
                copy = words + '<span class="km-slash"> / </span>';

            li.setAttribute('class', 'km-slogan');
            li.innerHTML = copy;

            return li;
        },

        resetFree: function(){
            this.free = this.used.slice(0);
            this.used = [];
        }
    };


    $(document).ready(function(){
        app.list.init();
        $('li').hyphenate('en-us');
    });

})();
