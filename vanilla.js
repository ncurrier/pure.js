function Pure(){

    var version = '2.0.0';
    var releaseName = 'code-happy';

    Object.defineProperty(this, "version", { 
        get: function() { return version; }   
    }); 

    Object.defineProperty(this, "releaseName", { 
        get: function() { return releaseName; }
    }); 

    return this;
};

