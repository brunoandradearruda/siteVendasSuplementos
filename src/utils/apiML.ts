export async function getPrecoAtualizado(mlId: string | undefined) {
  // Se o produto não tiver ID, retorna nulo imediatamente
  if (!mlId) return null;

  try {
    // Conecta na API pública do Mercado Livre
    // next: { revalidate: 3600 } significa que ele guarda o preço por 1 hora (3600s) para ser rápido
    const response = await fetch(`https://api.mercadolibre.com/items/${mlId}`, {
      next: { revalidate: 3600 } 
    });

    if (!response.ok) return null;

    const data = await response.json();
    return data.price as number; // Retorna o preço exato do ML
  } catch (error) {
    console.error("Erro ao buscar preço no ML:", error);
    return null; // Se der erro, retorna nulo (e usaremos o preço manual)
  }
}