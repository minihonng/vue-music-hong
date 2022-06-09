import { ref, watch, computed, nextTick } from 'vue'


export default function useFixed(props) {
    const groupRef = ref(null)
    const listHeights = ref([])

    watch(() => props.data, async() => {
        await nextTick()
        calculate()
    })

    function calculate() {
        console.log('groupRef', groupRef)
        const list = groupRef.value.children
        conssole.log('listHeights', listHeights)
        const listHeightsVal = listHeights.value
        let height = 0

        listHeightsVal.length = 0
        listHeightsVal.push(height)

        // for (let i = 0; i < list.length; i++) {
        //   height += list[i].clientHeight
        //   listHeightsVal.push(height)
    }
}
return {
    groupRef
}

}