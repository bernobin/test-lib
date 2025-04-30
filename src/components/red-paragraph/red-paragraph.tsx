import { Component, h } from '@stencil/core';

@Component({
  tag: 'red-paragraph',
  styleUrl: 'red-paragraph.css',
  shadow: true,
})
export class RedParagraph {
  render() {
    return <p>This is a red paragraph!</p>;
  }
}
