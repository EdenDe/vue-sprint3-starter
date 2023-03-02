export default {
  props: ['note'],
  template: `
    <section class="note-actions">
     
      <button class="btn-palette fa palette" title="Change Color">
      <div  class="pick-color" >
        
        <button class="btn-pick-color btn-red" @click="setBgColor('#e6c9a8', note.id)" title="Red"></button>
        <button class="btn-pick-color btn-pink" @click="setBgColor('#fdcfe8', note.id)" title="Pink"></button>
        <button class="btn-pick-color btn-purple" @click="setBgColor('#d7aefb', note.id)" title="Purple"></button>
        <button class="btn-pick-color btn-blue" @click="setBgColor('#aecbfa', note.id)" title="Blue"></button>
        <button class="btn-pick-color btn-green" @click="setBgColor('#ccff90', note.id)" title="Green"></button>
      </div>
      </button>
      <RouterLink :to="'/note/edit/'+note.id" class="fa pencil" title="Edit"></RouterLink>		
      <button @click="onCopy(note)" class="fa-regular copy" title="Copy"></button>
        <button @click="onRemove(note.id)" class="btn-remove fa trash-can" title="Delete">
        </button>
    </section>
  `,
  methods: {
    onCopy(note) {
      this.$emit('copy', note)
    },
    onRemove(noteId) {
      this.$emit('remove', noteId)
    },
    setBgColor(color, noteId) {
      this.toggleChoseColor()
      this.$emit('setBgColor', color, noteId)
    },
  },
  computed: {},
}
