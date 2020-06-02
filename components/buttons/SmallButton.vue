<template>
    <button class="font-medium px-6 border text-sm transition ease-in-out duration-200 rounded bg-background" :class="[styling,shadow]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type:{
            type:String,
            required: false,
        },
        mod:{
            type:String,
            required: false,
        }
    },
    computed: {
        styling() {
            const mappings = {
                primary: ["black","white","white","black"],
                secondary: ["white","accent5","white","black","accent2","black"],
                success: ["success","white","white","success","success","success"],
                error: ["error","white","white","error","error","error"],
                warning: ["warning","white","white","warning","warning","warning"],
                default: ["black","white"],
            };
            const primary = mappings[this.type][0] || mappings.default[0];
            const secondary = mappings[this.type][1] || mappings.default[1];
            const hover_primary = mappings[this.type][2] || mappings.default[0];
            const hover_secondary = mappings[this.type][3] || mappings.default[1];
            const border = mappings[this.type][4] || 'black';
            const hover_border = mappings[this.type][5] || border;

            
            return 'bg-'+primary+' text-'+secondary + ' hover:bg-'+hover_primary+' hover:text-'+hover_secondary +" border-"+border + " hover:border-"+hover_border
        },
        shadow() {
            if (this.mod=="shadow"){
                return "shadow-md transform hover:-translate-y-1"
            }
            return ""
        }
    }
}
</script>

