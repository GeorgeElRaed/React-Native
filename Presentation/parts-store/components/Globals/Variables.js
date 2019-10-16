export default class Variables {
    
    static SearchBarActive = {
        valueInternal: false,
        valueListener: function (val) { },
        set value(val) {
            this.valueInternal = val;
            this.valueListener(val);
        },
        get value() {
            return this.valueInternal;
        },
        registerListener: function (listener) {
            this.valueListener = listener;
        }
    }

    
}