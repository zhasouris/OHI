<template>
<div>
    <v-expansion-panels focusable multiple>
        <v-expansion-panel v-for="(cat,i) in menu" :key="i">
            <v-expansion-panel-header><h2>{{cat.title}}</h2></v-expansion-panel-header>
            <v-expansion-panel-content>
                <div v-if="cat.list">
                    <v-chip style="margin:10px;" label v-for="(item, i) in cat.list" :key="i">{{item}}</v-chip>
                </div>
                <v-simple-table v-for="(group, g) in cat.groups" :key="g">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th width="50%"></th>
                                <th v-if="!group.columns"></th>
                                <th v-else v-for="(col, c) in group.columns" :key="c">{{col}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, i) in group.items" :key="i">
                                <td>{{ item.title }}</td>
                                <td v-if="!isNaN(item.price)"><span class="uom" >$</span>{{ item.price | formatNumber }}</td>
                                <td v-else v-for="(price, p) in item.price" :key="p"><span class="uom" >$</span> {{ price | formatNumber  }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>

                <v-divider />

                <v-alert v-if="cat.footerText">
                    {{cat.footerText}}
                </v-alert>

            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>

    <v-alert>
<p>
    Prices subject to change without notice.<br />
    Add 8.25% sales tax on all items.<br />
</p>
    </v-alert>
</div>

</template>

<script>
import menu from "../menu.js"

export default {
    name: 'Menu',
    props: {
        topLink: {
            type: String,
            default: "#food-menu"
        },
    },
    computed: {
        menu() {
            return menu;
        }
    },
    data: () => ({}),
}
</script>
<style lang="scss">
.uom {
    opacity:.3;display:inline-block;margin:0px 5px;
}
</style>
