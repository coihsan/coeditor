import { v4 as uuid } from 'uuid'
import React, { useEffect, useState } from 'react';

const startNote = {
    id: uuid(),
    text: '',
    created: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    category: '',
    isTags: [],
    isPinned: false,
    isTrash: false,
    isArchived: false,
}