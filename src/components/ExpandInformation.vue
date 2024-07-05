<template>
    <div class="q-pa-md" style="width: 100%;">
        <q-list bordered>
            <q-expansion-item
                group="somegroup"
                icon="description"
                class="teal-custom-colour-text"
                label="Description"
                default-opened
                header-class="bg-grey-3"
                v-if="description"
            >
                <q-card>
                    <q-card-section>
                        {{description}}
                    </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-separator class="bg-grey-4" />
            <q-expansion-item
                group="somegroup"
                class="teal-custom-colour-text"
                icon="info"
                label="Information On Pricing"
                default-opened
                header-class="bg-grey-3"
            >
                <q-card>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                </q-card>
            </q-expansion-item>
        </q-list>
    </div>
</template>

<script>

export default {
    props: {
        description: {
            type: String,
            required: false
        }
    },
    setup() {
        
    },
}
</script>
