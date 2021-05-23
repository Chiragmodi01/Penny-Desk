$(function(){

    chrome.storage.sync.get('limit', function(budget){
        $('#limit').val(budget.limit);
    })

    $('#saveLimit').click(function(){
        var limit = $('#limit').val();
        if(limit){
            chrome.storage.sync.set({'limit': limit}, function(){
                var notifOptions = {
                    type: 'basic',
                    iconUrl: 'icon48.png',
                    title: 'Limit Set',
                    message: "New Limit has been set"
                };
    
                chrome.notifications.create('LimitNotif', notifOptions);
                chrome.notifications.clear('LimitNotif');
            });
        }
    });

    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total': 0}, function(){

            var notifOptions = {
                type: 'basic',
                iconUrl: 'icon48.png',
                title: 'Resetting Total!',
                message: "Total has been reset to 0"
            };

            chrome.notifications.create('resetNotif', notifOptions);
            chrome.notifications.clear('resetNotif'); 
        });
    })
});