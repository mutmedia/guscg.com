export default function (href) {
  return (e) => {
      e.preventDefault();
      window.open(href, '_blank');
  };
}
