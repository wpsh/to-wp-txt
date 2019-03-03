import format from '../main'

describe('format syntax format', () => {

  function buildSample( parts ) {
    return parts.join("\n\n");
  }

  it('can format top-level headings', () => {
    const from = buildSample(['# Plugin Name', 'Here it is.'])
    const to = buildSample(['=== Plugin Name ===', 'Here it is.'])

    expect(format(from)).toEqual(to)
  })

  it('can format super low-level headings', () => {
    const from = buildSample(['##### Mega Low Heading', 'Here it is.'])
    const to = buildSample(['= Mega Low Heading =', 'Here it is.'])

    expect(format(from)).toEqual(to)
  })

})
