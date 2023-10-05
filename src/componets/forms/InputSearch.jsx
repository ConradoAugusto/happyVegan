export const InputSearch = () => {
  return (
    <form>
      <fieldset className="inputSearch">
        <label htmlFor="search" className="title center two bold Green">
          Encontre restaurantes veganos nas proximidades
        </label>
        <input name="search" id="search" type="text" />
      </fieldset>
    </form>
  );
};
