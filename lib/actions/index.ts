"use server";

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productURL: string) {
  if (!productURL) return;

  try {

    const scrapedProduct = await scrapeAmazonProduct(productURL);
  } catch (error: any) {
    throw new Error(`Falha ao atualizar/criar o produto: ${error.message}`);
  }
}
