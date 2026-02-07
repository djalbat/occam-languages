"use strict";

import { arrayUtilities } from "necessary";

import { asyncResolve } from "../utilities/asynchronous";

const { first, filter, compress } = arrayUtilities;

export async function verifyFileContexts(fileContexts, verifiedFileContexts) {
  const resolved = await asyncResolve(fileContexts, verifiedFileContexts, async (fileContext) => {
      const fileContextVerifies = await fileContext.verify();

      if (fileContextVerifies) {
        return true;
      }
    }),
    fileContextsVerify = resolved;  ///

  return fileContextsVerify;
}

export function verifyTypePrefixes(typePrefixes, releaseContext) {
  let typePrefixesVerify = true;

  const typePrefixesLength = typePrefixes.length,
    compressedTypePrefixes = [  ///
      ...typePrefixes,
    ];

  compress(compressedTypePrefixes, (typePrefixA, typePrefixB) => {
    const typePrefixAName = typePrefixA.getName(),
      typePrefixBName = typePrefixB.getName();

    if (typePrefixAName !== typePrefixBName) {
      return true;
    }
  });

  const compressTypePrefixesLength = compressedTypePrefixes.length;

  if (typePrefixesLength > compressTypePrefixesLength) {
    filter(compressedTypePrefixes, (typePrefix) => {
      const typePrefixesIncludesTypePrefix = typePrefixes.includes(typePrefix);

      if (!typePrefixesIncludesTypePrefix) {
        return true;
      }
    });

    const firstTypePrefix = first(typePrefixes),
      typePrefix = firstTypePrefix, ///
      typePrefixString = typePrefix.getString();

    releaseContext.info(`The '${typePrefixString}' type prefix is duplicated at least once.`)

    typePrefixesVerify = false;
  }

  return typePrefixesVerify;
}
