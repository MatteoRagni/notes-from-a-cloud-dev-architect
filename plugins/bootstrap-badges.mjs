const badges = [
  'bdg-danger',
  'bdg-primary',
  'bdg-success',
  'bdg-warning',
  'bdg-info'
];

const roles = badges.map(bdg => {
  return {
    name: bdg,
    doc: `Creates a ${bdg} bootstrap like badge`,
    body: {
      type: 'myst',
      doc: 'The body of the role',
      required: true
    },
    run(data, vfile, ctx) {
      return [{
        type: 'span',
        class: `badge ${bdg}`,
        children: data.body
      }]
    }
  }
})

const BootstrapBadgePlugin = {
  name: 'Bootstrap Badge Plugin',
  roles
}

export default BootstrapBadgePlugin