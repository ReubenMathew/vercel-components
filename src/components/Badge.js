{/* <template>
    <span class="rounded-full font-medium text-sm px-2 py-1/3" :class="styling">
        <slot></slot>
    </span>
</template>


<script>
export default {
    props: {
        type:{
            type:String,
            required: false,
        },
    },
    computed: {
        styling() {
            const mappings = {
                primary: ["black","white"],
                secondary: ["white","black","black"],
                success: ["success","white"],
                error: ["error","white"],
                warning: ["warning"],
                default: ["black"],
            };
            const background = mappings[this.type][0] || mappings.default[0];
            const text = mappings[this.type][1] || mappings.default[1];
            const border = mappings[this.type][2];
            
            return 'bg-'+background+' text-'+text + " border-"+border
        }, 
    }
}
</script> */}